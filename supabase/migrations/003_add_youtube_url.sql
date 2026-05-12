-- Add YouTube URL support to lessons (replaces Mux for video hosting)
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS youtube_url TEXT;
