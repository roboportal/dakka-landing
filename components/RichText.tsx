import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { css } from '@emotion/react'
import { loader } from '../lib/imageLoader'

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
              height={item.height / 2}
              width={item.width / 2}
              loader={loader}
              unoptimized
            />
          )
        }

        return null
      },
    },
    renderMark: {
      [MARKS.CODE]: (code) => (
        <pre>
          <code>{code}</code>
        </pre>
      ),
    },
  }
}

export default function RichText({ content, links }) {
  return <>{documentToReactComponents(content, getRenderOption(links))}</>
}
