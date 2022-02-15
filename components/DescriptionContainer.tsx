import React from 'react'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import BarChart from '@mui/icons-material/BarChart'
import LocationSearching from '@mui/icons-material/LocationSearching'
import FileDownload from '@mui/icons-material/FileDownload'
import Image from 'next/image'
import screen from '../public/screen3.png'

export function DescriptionContainer() {
  return (
    <div
      css={css`
        margin-top: 8rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        background: rgb(245, 246, 247);
        padding: 4rem 12rem;
        color: rgb(68, 68, 68);

        @media (max-width: 1200px) {
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
            width: 25rem;
          }

          @media (max-width: 678px) {
            flex-direction: column;

            > div {
              margin-bottom: 1rem;
              text-align: start;
              justify-content: start;
            }
          }
        `}
      >
        <Box
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <BarChart
            css={css`
              color: #0c97a8;
              margin-right: 0.5rem;
            `}
          />
          <span>Generate tests with user actions</span>
        </Box>
        <Box
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <LocationSearching
            css={css`
              color: #0c97a8;
              margin-right: 0.5rem;
            `}
          />
          <span>Add assertions and choose the element selector</span>
        </Box>
        <Box
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <FileDownload
            css={css`
              color: #0c97a8;
              margin-right: 0.5rem;
            `}
          />
          <span>Export to Playwright, Cypress, Puppeteer</span>
        </Box>
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
