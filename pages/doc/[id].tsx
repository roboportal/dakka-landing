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
            padding: 16px;
          `}
        >
          {navigation.map(({ id, title }) => (
            <Link key={id} href={`/doc/${id}`} passHref>
              <MLink>{title}</MLink>
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
  const navigation = await getDocumentsNavigation()
  const title = page?.data?.docPage?.title
  const content = page?.data?.docPage?.content?.json

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
