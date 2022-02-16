import React from 'react'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import screen from '../public/screen3.png'
import CheckOutlined from '@mui/icons-material/CheckCircle'
import { green } from '@mui/material/colors'
import Button from '@mui/material/Button'

export function DescriptionContainer() {
  return (
    <Box
      css={css`
        margin-top: 4rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background: rgb(245, 246, 247);
        width: 100%;
        padding: 2rem 12rem;

        @media (max-width: 1200px) {
          flex-direction: column;
          padding: 2rem 2rem;
        }
      `}
    >
      <div
        css={css`
          flex: 2;
          margin-right: 4rem;
        `}
      >
        <h2
          css={css`
            line-height: 2.5rem;
            color: #000;
            font-size: 2rem;
          `}
        >
          Gerenate tests for Cypress, Plawright and Puppeteer End-to-End tests
        </h2>
        <div
          css={css`
            letter-spacing: 0.025em;
            color: #191919;
            line-height: 1.5rem;
            display: flex;
            flex-direction: column;

            > div {
              margin-bottom: 1rem;
            }
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <CheckOutlined
              css={css`
                color: ${green[600]};
                margin-right: 0.5rem;
              `}
            />
            <span>
              Visual representation of user actions happening on the page.
            </span>
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <CheckOutlined
              css={css`
                color: ${green[600]};
                margin-right: 0.5rem;
              `}
            />
            <span>
              Choose element selector from the list of best suggested selectors.
            </span>
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <CheckOutlined
              css={css`
                color: ${green[600]};
                margin-right: 0.5rem;
              `}
            />
            <span>
              Add assertion blocks to any testing phase, locate elements for
              assertion and add assertion logic. - Export or copy to clipboard
              generated tests.
            </span>
          </div>
          <Button
            disableElevation
            css={css`
              border-radius: 0;
              margin-top: 1rem;
              align-self: start;
              background: #191919;
              border-radius: 2px;

              &:hover {
                background: #0c97a8;
              }

              @media (max-width: 600px) {
                width: 80%;
                margin-top: 2rem;
                align-self: center;
                margin-bottom: 2rem;
              }
            `}
            variant="contained"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div
        css={css`
          flex: 2;

          @media (max-width: 1200px) {
            margin-top: 2rem;
          }
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
    </Box>
  )
}
