-- Migration: add status, course_interest to students + signup trigger
-- Run this in Supabase SQL Editor after 001_initial_schema.sql

-- Add status column
ALTER TABLE students ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending'
  CHECK (status IN ('pending', 'active', 'suspended'));

-- Add course_interest column
ALTER TABLE students ADD COLUMN IF NOT EXISTS course_interest TEXT
  CHECK (course_interest IN ('ashtanga_ttc', 'hatha_ttc', 'beyond_asana'));

-- Allow authenticated users to insert their own student record (needed for signup flow)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'students' AND policyname = 'Students can insert own profile'
  ) THEN
    CREATE POLICY "Students can insert own profile" ON students
      FOR INSERT WITH CHECK (auth.uid() = auth_user_id);
  END IF;
END
$$;

-- Trigger function: auto-create student row when a new auth user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.students (auth_user_id, email, first_name, last_name, status)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    'pending'
  )
  ON CONFLICT (auth_user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
