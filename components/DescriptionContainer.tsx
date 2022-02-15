import React from 'react'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'

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
          > div {
            text-align: center;
            width: 20rem;
          }

          @media (max-width: 678px) {
            flex-direction: column;

            > div {
              margin-bottom: 1rem;
            }
          }
        `}
      >
        <Box>Generate tests with user actions</Box>
        <Box>Add Assertion Blocks and choose the best element selector</Box>
        <Box>Export to Playwright, Cypress, Puppeteer</Box>
      </div>
      <Box
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
      </Box>
    </div>
  )
}
