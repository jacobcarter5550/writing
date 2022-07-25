
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = 'https://kxbbsrhjudgafnkyawbw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export default async function testSuabase (req, res) {
    const userData = req.body.userData,
        email = userData.email,
        id = userData.publicAddress,
        uuid = uuidv4()

    let { data, error } = await supabase.from('users').select('*, questionID(*)').match({id:id})

    if(data == (null || '')) {
        await supabase .from('questions').insert([{
            id:uuid
        }]).then(async()=> await supabase.from('users').insert([{
            id : id, email : email, issuer: userData.issuer, questionID:uuid
        }]))

        const {data:resp, error} = await supabase.from('users').select('*, questionID(*)').match({id:id})

        res.json(resp[0])
    } else {
        res.json(data[0])
    }

    res.status(200)
}