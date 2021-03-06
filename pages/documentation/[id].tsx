import React from 'react'
import { css } from '@emotion/react'
import ErrorPage from 'next/error'
import Link from 'next/link'
import MLink from '@mui/material/Link'

import { Header } from '../../components/Header'
import RichText from '../../components/RichText'
import { useSearch } from '../../lib/useSearch'
import { Menu } from '../../components/Menu'

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
  onOpenNav: () => void
  open: boolean
}

export default function Documentation({
  title,
  content,
  id,
  navigation,
  links,
  searchIndex,
  onOpenNav,
  open,
}: LandingProps) {
  const { doSearch } = useSearch(searchIndex, navigation)

  if (!title || !content) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Menu
        navigation={navigation}
        id={id}
        open={open}
        onOpenNav={onOpenNav}
        doSearch={doSearch}
      />
      <Header onOpenNav={onOpenNav} id={id} handleSearch={doSearch} />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          width: 100%;
          background-color: white;
        `}
      >
        <nav
          css={css`
            display: flex;
            flex-direction: column;
            border-right: 1px solid;
            border-color: #eaeaea;
            padding: 2rem;
            width: 300px;

            @media (max-width: 768px) {
              display: none;
            }
          `}
        >
          {navigation.map(({ id, title, isMatch }) => (
            <Link key={id} href={`/documentation/${id}`} passHref>
              <MLink
                css={css`
                  margin-bottom: 8px;
                  color: ${isMatch ? '#0c97a8' : '#2e3138'};
                  padding: 8px;
                  font-size: 1.125rem;
                  font-weight: 400;
                  text-decoration: none;

                  &:hover {
                    text-decoration: none;
                    background-color: hsla(0, 100%, 1%, 0.09);
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
            padding: 0 4vw;
            word-break: break-word;
            width: 100%;
            line-height: 28px;
            max-width: 999px;
            color: #2e3138;
            margin-bottom: 8rem;

            > h2 {
              margin-top: 3rem;
            }

            a {
              color: #0c97a8;
            }

            > hr {
              border: none;
              margin: 0;
              border-top: 1px solid #eee;
            }

            p {
              font-size: 1.125rem;
              line-height: 1.75rem;
              margin-bottom: 1.25rem;
            }
          `}
        >
          <h1
            css={css`
              margin-top: 5rem;
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
