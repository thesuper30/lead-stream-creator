DROP POLICY IF EXISTS "Public read blog media" ON storage.objects;

CREATE POLICY "Authors read own blog media"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'blog-media' AND owner = auth.uid());