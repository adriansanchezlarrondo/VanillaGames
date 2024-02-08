import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://npnejnyfirxisnndadfb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbmVqbnlmaXJ4aXNubmRhZGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MTE4NjgsImV4cCI6MjAyMjM4Nzg2OH0.xnOmvys9wiyBbVv9-L-m83Nub2vnsGl75gPl2TEBx-g'
export const supabase = createClient(supabaseUrl, supabaseKey)
