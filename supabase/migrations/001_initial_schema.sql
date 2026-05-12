-- Samyut Yoga Platform — Initial Database Schema
-- Run this in Supabase SQL Editor to set up the complete schema

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- STUDENTS
-- ============================================================
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  country TEXT,
  date_of_birth DATE,
  avatar_url TEXT,
  bio TEXT,
  is_vip BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- COURSES
-- ============================================================
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('ashtanga', 'hatha', 'beyond_asana')),
  duration_weeks INTEGER,
  price_inr INTEGER,
  price_eur INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ENROLMENTS
-- ============================================================
CREATE TABLE IF NOT EXISTS enrolments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  batch_date DATE NOT NULL,
  accommodation TEXT CHECK (accommodation IN ('triple', 'twin', 'private')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'complete', 'refunded')),
  enrolment_date TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (student_id, course_id, batch_date)
);

-- ============================================================
-- MODULES
-- ============================================================
CREATE TABLE IF NOT EXISTS modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  position INTEGER NOT NULL,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- LESSONS
-- ============================================================
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  mux_playback_id TEXT,
  mux_asset_id TEXT,
  duration_seconds INTEGER,
  position INTEGER NOT NULL,
  is_published BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- LESSON PROGRESS
-- ============================================================
CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  watched_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (student_id, lesson_id)
);

-- ============================================================
-- ASSIGNMENTS
-- ============================================================
CREATE TABLE IF NOT EXISTS assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMPTZ,
  position INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS assignment_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  content TEXT,
  file_url TEXT,
  feedback TEXT,
  grade TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  graded_at TIMESTAMPTZ,
  UNIQUE (assignment_id, student_id)
);

-- ============================================================
-- QUIZ QUESTIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_option TEXT CHECK (correct_option IN ('a', 'b', 'c', 'd')) NOT NULL,
  explanation TEXT,
  position INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- FORUM
-- ============================================================
CREATE TABLE IF NOT EXISTS forum_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id),
  parent_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  title TEXT,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS forum_likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (post_id, student_id)
);

-- ============================================================
-- CERTIFICATES
-- ============================================================
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  enrolment_id UUID REFERENCES enrolments(id) ON DELETE CASCADE,
  certificate_url TEXT,
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (enrolment_id)
);

-- ============================================================
-- APPLICATIONS (Registration Form)
-- ============================================================
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT,
  state TEXT,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  course TEXT CHECK (course IN ('ashtanga', 'hatha')),
  accommodation TEXT CHECK (accommodation IN ('triple', 'twin', 'private')),
  course_date TEXT,
  experience TEXT,
  referral TEXT,
  food_preferences TEXT,
  injuries TEXT,
  questions TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'waitlisted')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- WORKSHOP INTERESTS (Beyond Asana notifications)
-- ============================================================
CREATE TABLE IF NOT EXISTS workshop_interests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT DEFAULT 'all',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- Students can only access their own data
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students see own profile" ON students FOR ALL USING (auth.uid() = auth_user_id);

ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students see own progress" ON progress FOR ALL USING (auth.uid() = (SELECT auth_user_id FROM students WHERE id = student_id));

ALTER TABLE assignment_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students see own submissions" ON assignment_submissions FOR ALL USING (auth.uid() = (SELECT auth_user_id FROM students WHERE id = student_id));

ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students see own attempts" ON quiz_attempts FOR ALL USING (auth.uid() = (SELECT auth_user_id FROM students WHERE id = student_id));

-- Forum is readable by all enrolled students
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enrolled students read forum" ON forum_posts FOR SELECT USING (
  EXISTS (SELECT 1 FROM enrolments e JOIN students s ON e.student_id = s.id WHERE s.auth_user_id = auth.uid())
);
CREATE POLICY "Students create posts" ON forum_posts FOR INSERT WITH CHECK (
  auth.uid() = (SELECT auth_user_id FROM students WHERE id = student_id)
);

-- Modules and lessons readable by enrolled students
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enrolled students read modules" ON modules FOR SELECT USING (is_published = true);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enrolled students read lessons" ON lessons FOR SELECT USING (is_published = true);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_progress_student ON progress(student_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson ON progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_forum_module ON forum_posts(module_id);
CREATE INDEX IF NOT EXISTS idx_forum_parent ON forum_posts(parent_id);
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_workshop_interests_email ON workshop_interests(email);
CREATE INDEX IF NOT EXISTS idx_enrolments_student ON enrolments(student_id);

-- ============================================================
-- SEED: Default courses
-- ============================================================
INSERT INTO courses (slug, title, description, type, duration_weeks, price_inr, price_eur)
VALUES
  ('ashtanga-200hr', '200hrs Ashtanga Yoga TTC', 'Traditional Ashtanga Vinyasa Teacher Training — Primary Series, Mysore style, Yoga Alliance RYT-200', 'ashtanga', 3, 79900, 1099),
  ('hatha-200hr', '200hrs Hatha Yoga TTC', 'Classical Hatha Yoga Teacher Training — complete curriculum, Yoga Alliance RYT-200', 'hatha', 3, 79900, 1099)
ON CONFLICT (slug) DO NOTHING;
