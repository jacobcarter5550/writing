import { createClient } from '@supabase/supabase-js'
import axios from 'axios'

const supabaseUrl = 'https://kxbbsrhjudgafnkyawbw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const address = 'http://localhost:3010'

export default async function updateForm (req, res) {
    let userData = req.body.userData,
        form = req.body.form

    form['submitted'] = true

    const {data, error} = await supabase 
    .from('questions')
    .update({first:form.first,
    second:form.second,
    third:form.third,
    fourth:form?.fourth,
    fifth:form?.fifth,
    sixth:form.sixth,
    seventh:form?.seventh,
    eighth:form?.eighth,
    nineth:form.nineth,
    tenth:form?.tenth,
    interest_tags:form?.interest_tags,
    submitted: true,
    })
    .match({ id: userData.questionID.id })

    const notion = await axios.post(`${address}/api/notion/notionDBCreate`, {name : form.name})

    await supabase
    .from ('users')
    .update({name: form.name, dbID : notion.data.id})
    .match({id : userData.id})

    res.json(data)
    res.status(200).end()
}