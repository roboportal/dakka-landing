import React from 'react'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import CheckOutlined from '@mui/icons-material/CheckCircle'
import { green } from '@mui/material/colors'
import Button from '@mui/material/Button'
import { ImageCarousel } from '../components/ImageCarousel'
import { DAKKA_URL_CHROME } from '../lib/constants'

export function DescriptionContainer() {
  return (
    <Box
      css={css`
        margin-top: 2rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background: rgb(245, 246, 247);
        width: 100%;
        padding: 4rem 8rem;

        @media (max-width: 1500px) {
          padding: 2rem 2rem;
        }

        @media (max-width: 1024px) {
          flex-direction: column;
          padding: 2rem 4rem;
        }

        @media (max-width: 768px) {
          flex-direction: column;
          padding: 2rem 1.5rem;
        }
      `}
    >
      <div
        css={css`
          flex: 2;
          margin-right: 6rem;

          @media (max-width: 900px) {
            margin-right: 0;
          }
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            line-height: 2.5rem;
            color: #000;
            font-size: 2rem;
            font-weight: 600;

            @media (max-width: 768px) {
              text-align: center;
            }

            span {
              color: #00796b;
            }
          `}
        >
          Gerenate tests for <span>Cypress</span>, <span>Plawright</span> and
          <span> Puppeteer</span>
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
              align-items: center;
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
                width: 1.2rem;
                height: 1.2rem;
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
                width: 1.2rem;
                height: 1.2rem;
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
                width: 1.2rem;
                height: 1.2rem;
              `}
            />
            <span>
              Add assertion blocks, locate elements for assertion and add
              assertion logic.
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
                width: 1.2rem;
                height: 1.2rem;
              `}
            />
            <span>Export or copy to clipboard generated tests.</span>
          </div>
          <a href={DAKKA_URL_CHROME} target="_blank" rel="noreferrer">
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

                @media (max-width: 768px) {
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
          </a>
        </div>
      </div>
      <div
        css={css`
          flex: 2;
          width: 100%;

          @media (max-width: 1200px) {
            margin-top: 2rem;
          }
        `}
      >
        <ImageCarousel />
      </div>
    </Box>
  )
}
