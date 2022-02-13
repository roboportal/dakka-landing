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
  links: any[]
}

export default function Documentation({
  title,
  content,
  id,
  navigation,
  links,
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
          background-color: #1c1e21;
        `}
      >
        <nav
          css={css`
            display: flex;
            flex-direction: column;
            border-right: 1px solid;
            border-color: #606770;
            padding: 16px;
            width: 300px;
          `}
        >
          {navigation.map(({ id, title, isMatch }) => (
            <Link key={id} href={`/documentation/${id}`} passHref>
              <MLink
                css={css`
                  margin-bottom: 8px;
                  color: #dadde1;
                  color: ${isMatch ? '#0c97a8' : '#dadde1'};
                  padding: 8px;
                  font-size: 1em;
                  font-weight: 400;
                  text-decoration: none;

                  &:hover {
                    text-decoration: none;
                    background-color: hsla(0, 0%, 100%, 0.05);
                    border-radius: 4px;
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
            color: #dadde1;
            line-height: 28px;
          `}
        >
          <h1
            css={css`
              font-size: 3rem;
              margin-bottom: 3rem;
            `}
          >
            {title}
          </h1>
          <RichText content={content} links={links} />
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
  const links = page?.data?.docPage?.content?.links?.assets?.block

  const navigation = navigationData
    .map((n) => {
      const isMatch = n.id === id
      return { ...n, isMatch }
    })
    .sort((a, b) => (a.level !== b.level ? (a.level < b.level ? -1 : 1) : 0))

  return {
    props: { title, content, id, navigation, links },
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
