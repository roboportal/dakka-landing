import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { css } from '@emotion/react'
import { loader } from '../lib/imageLoader'

const getRenderOption = (links) => {
  return {
    renderNode: {
      [BLOCKS.HEADING_6]: (node) => {
        const content = node.content[0].value
        return <span>{content}</span>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const item = links.find((l) => l.sys.id === node.data.target.sys.id)

        if (item.contentType === 'image/svg+xml') {
          return (
            <Image
              css={css`
                top: 1.8rem !important;
              `}
              src={item.url}
              alt={item.title}
              height="50px"
              width={item.width}
              loader={loader}
              unoptimized
            />
          )
        }

        if (item.contentType.indexOf('image') === 0) {
          return (
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 4rem;
                margin-bottom: 4rem;
              `}
            >
              <Image
                css={css`
                  border-radius: 0.4rem;
                  border: 1px solid #eaeaea !important;
                `}
                src={item.url}
                alt={item.title}
                height={item.height / 2}
                width={item.width / 2}
                loader={loader}
                unoptimized
              />
            </div>
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
