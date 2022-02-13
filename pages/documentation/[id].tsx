import React from 'react'
import { css } from '@emotion/react'
import ErrorPage from 'next/error'
import Link from 'next/link'
import MLink from '@mui/material/Link'

import { Header } from '../../components/Header'
import RichText from '../../components/RichText'
import { useSearch } from '../../lib/useSearch'

import {
  getDocument,
  getDocumentsIds,
  getDocumentsNavigation,
  getDocumentsSearchIndex,
} from '../../lib/api'

interface LandingProps {
  title: string
  id: string
  content: any
  navigation: any[]
  links: any[]
  searchIndex: any
}

export default function Documentation({
  title,
  content,
  id,
  navigation,
  links,
  searchIndex,
}: LandingProps) {
  const { doSearch } = useSearch(searchIndex, navigation)

  if (!title || !content) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Header id={id} handleSearch={doSearch} />
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
            <Link key={id} href={`/documentation/${id}`} passHref>
              <MLink
                css={css`
                  margin-bottom: 8px;
                  color: white;
                  font-size: 1em;
                  font-weight: 600;
                  text-decoration: ${isMatch ? 'none' : 'underline'};

                  &:hover {
                    text-decoration: none;
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
            padding: 0 2vw;
            word-break: break-word;
            width: 100%;
          `}
        >
          <h1>{title}</h1>
          <RichText content={content} links={links} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params: { id } }) {
  const page = await getDocument(id)
  const navigation = await getDocumentsNavigation(id)
  const searchIndex = await getDocumentsSearchIndex()

  const title = page?.data?.docPage?.title
  const content = page?.data?.docPage?.content?.json
  const links = page?.data?.docPage?.content?.links?.assets?.block

  return {
    props: { title, content, id, navigation, links, searchIndex },
  }
}

export async function getStaticPaths() {
  const data = await getDocumentsIds()

  const paths = data.map((id) => `/documentation/${id}`)

  return {
    paths,
    fallback: false,
  }
}
