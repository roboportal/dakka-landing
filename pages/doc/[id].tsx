import React from 'react'
import { css } from '@emotion/react'
import ErrorPage from 'next/error'
import Link from 'next/link'
import MLink from '@mui/material/Link'

import { Header } from '../../components/Header'

import RichText from '../../components/RichText'

import {
  getDocument,
  getDocumentsIds,
  getDocumentsNavigation,
} from '../../lib/api'

interface LandingProps {
  title: string
  id: string
  content: any
  navigation: any[]
}

export default function Documentation({
  title,
  content,
  id,
  navigation,
}: LandingProps) {
  if (!title || !content) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Header id={id} />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          width: 100%;
        `}
      >
        <nav
          css={css`
            display: flex;
            flex-direction: column;
            border-right: 1px solid;
            border-color: #eaeaea;
            padding: 16px;
          `}
        >
          {navigation.map(({ id, title, isMatch }) => (
            <Link key={id} href={`/doc/${id}`} passHref>
              <MLink
                css={css`
                  margin-bottom: 8px;
                  color: white;
                  font-size: 1em;
                  font-weight: 600;
                  text-decoration: ${isMatch ? 'underline' : 'none'};

                  &:hover {
                    text-decoration: underline;
                  }
                `}
              >
                {title}
              </MLink>
            </Link>
          ))}
        </nav>
        <div
          css={css`
            padding: 0 16px 16px 16px;
          `}
        >
          <h1>{title}</h1>
          <RichText content={content} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params: { id } }) {
  const page = await getDocument(id)
  const navigationData = await getDocumentsNavigation()
  const title = page?.data?.docPage?.title
  const content = page?.data?.docPage?.content?.json

  const navigation = navigationData.map((n) => {
    const isMatch = n.id === id
    return { ...n, isMatch }
  })

  return {
    props: { title, content, id, navigation },
  }
}

export async function getStaticPaths() {
  const data = await getDocumentsIds()

  const paths = data.map((id) => `/doc/${id}`)

  return {
    paths,
    fallback: false,
  }
}
