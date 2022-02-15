import React from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

import Image from 'next/image'
import screen from '../public/screen3.png'

export function DescriptionContainer() {
  return (
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

        @media (max-width: 678px) {
          padding: 2rem 1rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: 1rem;

          @media (max-width: 678px) {
            flex-direction: column;

            > div {
              margin-bottom: 1rem;
            }
          }
        `}
      >
        <div
          css={css`
            width: 20rem;
            text-align: center;
          `}
        >
          Generate tests with user actions
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
  )
}
