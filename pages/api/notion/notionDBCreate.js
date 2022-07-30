const { Client } = require('@notionhq/client')

const notion = new Client({ auth: 'secret_XWS2LJVsaRBQCRftV9W1LIRNqxopdta7TokeyS0jcan' })


export default async function notionDBCreate (req, res) {

    const name = req.body.name ?? 'Default'

    try{
        const things = await notion.databases.create({
            icon: {
                type: "emoji",
                emoji: "🥬"
            },
            parent: {
                page_id : '41372006b80444838e3c048916d17b94'
            },
            title : [
                {
                    type : 'text',
                    text : {
                        content : `${name}'s Documents`
                    }
                }
            ],
            properties : {
                Name: {
                    title: {}
                },
            },
            
        })
        res.json({id :things.id})
    } catch (error) {
        console.log(error)
    }

    res.status(200).end()
}