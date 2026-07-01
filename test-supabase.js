import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rfmqufayoptnbetsbgjj.supabase.co';
const supabaseAnonKey = 'sb_publishable_H62dFc_ltA5rTmgDVJ5kTA_-8XagLHJ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log("Testing Supabase Database connection...");
  const { data, error } = await supabase.from('layouts').select('*').limit(1);
  if (error) {
    console.error("Database connection error:", error.message);
  } else {
    console.log("Database connection successful. Data:", data);
  }

  console.log("Testing Supabase Storage...");
  const { data: buckets, error: storageError } = await supabase.storage.listBuckets();
  if (storageError) {
    console.error("Storage error:", storageError.message);
  } else {
    console.log("Storage buckets available:", buckets?.map(b => b.name) || []);
  }
}

testConnection();
