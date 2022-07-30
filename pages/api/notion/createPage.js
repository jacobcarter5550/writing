const { Client } = require('@notionhq/client')

const notion = new Client({ auth: 'secret_XWS2LJVsaRBQCRftV9W1LIRNqxopdta7TokeyS0jcan' })



export default async function createPage ( req, res) {

    const doIt = await notion.pages.create({
    "cover": {
        "type": "external",
        "external": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
        }
    },
    "icon": {
        "type": "emoji",
        "emoji": "🥬"
    },
    "parent": {
        "type": "database_id",
        "database_id": "d42a2d53-a503-446d-900f-c65899655824"
    },
    "properties": {
        "Name": {
            "title": [
                {
                    "text": {
                        "content": "Tuscany"
                    }
                }
            ]
        },
    },
    "children": [
        {
            "object": "block",
            "heading_2": {
                "rich_text": [
                    {
                        "text": {
                            "content": "Lacination kale"
                        }
                    }
                ]
            }
        },
        {
            "object": "block",
            "paragraph": {
                "rich_text": [
                    {
                        "text": {
                            "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. \n It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                        },
                    }
                ],
                "color": "default"
            }
        }
    ]
});

res.status(200).end()
}


// d42a2d53-a503-446d-900f-c65899655824