import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const getRenderOption = (links) => {
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const item = links.find((l) => l.sys.id === node.data.target.sys.id)

        if (item.contentType.indexOf('image') === 0) {
          return (
            <Image
              src={item.url}
              alt={item.title}
              height={item.height}
              width={item.width}
            />
          )
        }

        return null
      },
    },
  }
}

export default function RichText({ content, links }) {
  return <>{documentToReactComponents(content, getRenderOption(links))}</>
}
