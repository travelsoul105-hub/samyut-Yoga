-- Patanjali Yoga Sutra Course Setup
-- Run this in Supabase SQL Editor

-- 1. Insert the course
INSERT INTO courses (slug, title, description, type, duration_weeks, price_inr, price_eur, is_active)
VALUES (
  'patanjali-yoga-sutra',
  'Patanjali Yoga Sutra Course',
  'A complete video study of the 196 Yoga Sutras — the ancient scripture that defines the philosophy, practice and goal of yoga.',
  'beyond_asana',
  NULL,
  0,
  0,
  true
)
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert the module
INSERT INTO modules (course_id, title, description, position, is_published)
SELECT
  id,
  'Patanjali Yoga Sutra — Complete Video Series',
  'All 6 lessons covering the four chapters of Patanjali''s Yoga Sutras',
  1,
  true
FROM courses WHERE slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;

-- 3. Insert the 6 lessons with YouTube links
INSERT INTO lessons (module_id, title, description, youtube_url, position, is_published)
SELECT
  m.id,
  'Introduction to Patanjali Yoga Sutra',
  'An overview of the Yoga Sutras of Patanjali — its history, structure and significance in classical yoga.',
  'https://youtu.be/PbE4_OU8_00',
  1,
  true
FROM modules m JOIN courses c ON m.course_id = c.id
WHERE c.slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;

INSERT INTO lessons (module_id, title, description, youtube_url, position, is_published)
SELECT
  m.id,
  'Samadhi Pada — The Nature of the Mind',
  'Chapter 1: Atha Yoganushasanam — exploring the definition of yoga, the fluctuations of the mind and the state of samadhi.',
  'https://youtu.be/3tt3E_H6aP4',
  2,
  true
FROM modules m JOIN courses c ON m.course_id = c.id
WHERE c.slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;

INSERT INTO lessons (module_id, title, description, youtube_url, position, is_published)
SELECT
  m.id,
  'Sadhana Pada — The Path of Practice',
  'Chapter 2: Tapas, Svadhyaya, Ishvarapranidhana — the kriya yoga path, the five kleshas and the eight limbs of Ashtanga Yoga.',
  'https://youtu.be/zSLbBTNnK2k',
  3,
  true
FROM modules m JOIN courses c ON m.course_id = c.id
WHERE c.slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;

INSERT INTO lessons (module_id, title, description, youtube_url, position, is_published)
SELECT
  m.id,
  'Vibhuti Pada — Powers & Achievements',
  'Chapter 3: Dharana, Dhyana and Samadhi — the inner limbs of yoga, samyama and the siddhis (supernatural powers).',
  'https://youtu.be/6IN5vHp99p8',
  4,
  true
FROM modules m JOIN courses c ON m.course_id = c.id
WHERE c.slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;

INSERT INTO lessons (module_id, title, description, youtube_url, position, is_published)
SELECT
  m.id,
  'Kaivalya Pada — Liberation & Freedom',
  'Chapter 4: The final chapter on absolute liberation — the nature of consciousness, the dissolution of the mind and Kaivalya.',
  'https://youtu.be/4GwzhpHTg5c',
  5,
  true
FROM modules m JOIN courses c ON m.course_id = c.id
WHERE c.slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;

INSERT INTO lessons (module_id, title, description, youtube_url, position, is_published)
SELECT
  m.id,
  'Integration — Living the Sutras in Daily Life',
  'Bringing the wisdom of the Yoga Sutras into daily practice — a practical guide to applying Patanjali''s teachings in modern life.',
  'https://youtu.be/67QRlDi3Cyw',
  6,
  true
FROM modules m JOIN courses c ON m.course_id = c.id
WHERE c.slug = 'patanjali-yoga-sutra'
ON CONFLICT DO NOTHING;
