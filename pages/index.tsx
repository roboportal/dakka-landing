import React from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

import { getDocumentsIds, getDocumentsSearchIndex } from '../lib/api'
import { Header } from '../components/Header'
import { useSearch } from '../lib/useSearch'
import Image from 'next/image'
import screen from '../public/screen3.png'

export default function LandingPage({ id, searchIndex, navigation }) {
  const { doSearch } = useSearch(searchIndex, navigation)
  return (
    <>
      <Header id={id} handleSearch={doSearch} />
      <h1
        css={css`
          margin: 0;
          padding-top: 2rem;
          font-size: 3.5rem;
          text-align: center;
        `}
      >
        Dakka
      </h1>
      <h2
        css={css`
          font-weight: 400;
          margin: 0;
          padding-top: 1rem;
          font-size: 2rem;
          text-align: center;
        `}
      >
        Open source test generation tool
      </h2>
      <p
        css={css`
          margin: 1rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        `}
      >
        <span
          css={css`
            margin-right: 5px;
            font-size: 1rem;
            color: #4a4a4a;
          `}
        >
          Get started by installing plugin
        </span>
        <a
          css={css`
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            color: #0c97a8;
            &:hover {
              text-decoration: underline;
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
            border-color: #0c97a8;
            color: #0c97a8;

            &:hover {
              color: #0c97a8;
              border-color: #0c97a8;
            }
          `}
          variant="outlined"
          size="large"
          onClick={() => {}}
        >
          Install Dakka
        </Button>
      </div>
      <div
        css={css`
          margin-top: 4rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          background: rgb(245, 246, 247);
          padding: 4rem 12rem;
          color: rgb(68, 68, 68);
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1rem;
          `}
        >
          <div
            css={css`
              width: 20rem;
              text-align: center;
            `}
          >
            Choose the best element selector
          </div>
          <div
            css={css`
              width: 20rem;
              text-align: center;
            `}
          >
            Add Assertion Blocks and choose the best element selector
          </div>
          <div
            css={css`
              width: 20rem;
              text-align: center;
            `}
          >
            Export to Playwright, Cypress, Puppeteer
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin-top: 2rem;
          `}
        >
          <Image
            alt="dakka logo"
            src={screen}
            css={css`
              cursor: pointer;
              color: #4a4a4a;
            `}
          />
        </div>
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
