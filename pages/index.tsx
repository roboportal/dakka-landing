import React from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

import { getDocumentsIds, getDocumentsSearchIndex } from '../lib/api'
import { Header } from '../components/Header'
import { useSearch } from '../lib/useSearch'

export default function LandingPage({ id, searchIndex, navigation }) {
  const { doSearch } = useSearch(searchIndex, navigation)
  return (
    <>
      <Header id={id} handleSearch={doSearch} />
      <h1
        css={css`
          margin: 0;
          padding-top: 4rem;
          font-size: 3.5rem;
          text-align: center;
        `}
      >
        Increase test coverage
      </h1>

      <p
        css={css`
          margin: 1.5rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        `}
      >
        <span
          css={css`
            margin-right: 5px;
            font-size: 1.5rem;
          `}
        >
          Get started by installing plugin
        </span>
        <a
          css={css`
            font-weight: 600;
            text-decoration: underline;

            &:hover {
              text-decoration: none;
            }
          `}
          href=""
        >
          Dakka
        </a>
      </p>

      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Button
          css={css`
            color: white;
            border-color: white;
          `}
          variant="outlined"
          size="large"
          onClick={() => {}}
        >
          Install Dakka
        </Button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const [id] = await getDocumentsIds()
  const searchIndex = await getDocumentsSearchIndex()

  return {
    props: { id, searchIndex },
  }
}
