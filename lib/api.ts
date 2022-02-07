const SPACE_ID = process.env.CF_SPACE_ID
const ACCESS_TOKEN = process.env.CF_ACCESS_TOKEN

const getOptions = (query) => ({
  spaceID: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
  method: 'POST',
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
})

export const getDocument = (id: string) => {
  const query = `query {
    docPage(id: "${id}") {
      title
      content {
        json
        links {
          assets { 
            block {
              sys {
                id
              }
              url
              title
              width
              height
              description
              contentType
            }
          }
        }
      }
    }
  }`

  const options = getOptions(query)

  return fetch(options.endpoint, options).then((r) => r.json())
}

export async function getDocumentsNavigation() {
  const query = `{
    docPageCollection {
      items {
        sys {
          id
        }
        title
      }
    }
  }`

  const options = getOptions(query)

  const result = await fetch(options.endpoint, options).then((r) => r.json())

  const data: Array<{ id: string; title: string }> =
    result.data.docPageCollection.items.map(({ sys: { id }, title }) => ({
      id,
      title,
    }))

  return data
}

export async function getDocumentsIds() {
  const query = `{
    docPageCollection {
      items {
        sys {
          id
        }
      }
    }
  }`

  const options = getOptions(query)

  const result = await fetch(options.endpoint, options).then((r) => r.json())

  const data: string[] = result.data.docPageCollection.items.map(
    ({ sys: { id } }) => id,
  )

  return data
}
