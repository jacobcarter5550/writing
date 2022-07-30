const { Client } = require('@notionhq/client')

const notion = new Client({ auth: 'secret_XWS2LJVsaRBQCRftV9W1LIRNqxopdta7TokeyS0jcan' })



export default async function queryData (req, res) {

    const pagesMaybe = await notion.databases.query({
        database_id : 'd42a2d53a503446d900fc65899655824'
    })

    const pageo = await notion.blocks.children.list({
        block_id : pagesMaybe.results[0].id
    })

    res.status(200).end()
}