import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rfmqufayoptnbetsbgjj.supabase.co';
const supabaseAnonKey = 'sb_publishable_H62dFc_ltA5rTmgDVJ5kTA_-8XagLHJ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  console.log("Testing Supabase Upsert...");
  const payload = {
    id: 'active',
    hero_banner: 'test_banner',
    updated_at: new Date().toISOString()
  };
  
  const { data, error } = await supabase.from('layouts').upsert(payload).select();
  
  if (error) {
    console.error("Database insert error:", error);
  } else {
    console.log("Database insert successful. Data:", data);
  }
}

testInsert();
