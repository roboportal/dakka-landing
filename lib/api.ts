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

export async function getDocumentsNavigation(id: string) {
  const query = `{
    docPageCollection {
      items {
        sys {
          id
        }
        title
        level
      }
    }
  }`

  const options = getOptions(query)

  const result = await fetch(options.endpoint, options).then((r) => r.json())

  const data: Array<{ id: string; title: string; level: string }> =
    result.data.docPageCollection.items.map(
      ({ sys: { id }, title, level }) => ({
        id,
        title,
        level,
      }),
    )

  return data
    .map((n) => {
      const isMatch = n.id === id
      return { ...n, isMatch }
    })
    .sort((a, b) => (a.level !== b.level ? (a.level < b.level ? -1 : 1) : 0))
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

export async function getDocumentsSearchIndex() {
  const query = `{
    docPageCollection {
      items {
        sys {
          id
        }
        title
        content {
          json
        }
      }
    }
  }`

  const options = getOptions(query)

  const result = await fetch(options.endpoint, options).then((r) => r.json())

  const getTextContext = (data) => {
    let text = ''

    const getTextContextAuxiliary = (it) => {
      if (Array.isArray(it)) {
        it.forEach(getTextContextAuxiliary)
      } else {
        if (it.nodeType === 'text') {
          text += `${it.value} `
        }
        Object.values(it).forEach((value) => {
          if (value instanceof Object) {
            getTextContextAuxiliary(value)
          }
        })
      }
    }

    getTextContextAuxiliary(data)

    return text
  }

  const data: string[] = result.data.docPageCollection.items.map(
    ({ sys: { id }, title, content }) => {
      return {
        id,
        title,
        content: getTextContext(content),
      }
    },
  )

  return data
}
