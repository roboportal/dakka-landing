import React from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const isRichText = (x: Document | unknown): x is Document => {
  return ['data', 'content', 'nodeType'].every((prop) =>
    Object.hasOwnProperty.call(x, prop),
  )
}

export default function RichText({ content }) {
  return <>{documentToReactComponents(content)}</>
}
