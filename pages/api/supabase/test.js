
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kxbbsrhjudgafnkyawbw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export default async function testSuabase (req, res) {
    console.log(supabase)
    let { data: users, error } = await supabase
  .from('users')
  .select()

    console.log(users,error, 33)

    res.status(200)
    res.json({data:users})


}