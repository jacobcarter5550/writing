
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = 'https://kxbbsrhjudgafnkyawbw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export default async function updateForm (req, res) {
    const userData = req.body.userData,
        form = req.body.form

    form['submitted'] = true

    const {data, error} = await supabase 
    .from('questions')
    .update(form)
    .match({ id: userData.questionID.id })

    res.json(data[0])
    res.status(200).end()
}