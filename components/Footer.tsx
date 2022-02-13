import { css } from '@emotion/react'
import { brown } from '@mui/material/colors'

export function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        padding: 2rem 0;
        border-top: 1px solid #eaeaea;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: rgba(250, 250, 250);
        margin-top: auto;
      `}
    >
      <span
        css={css`
          margin-right: 5px;
        `}
      >
        Powered by
      </span>
      <a
        href="https://github.com/roboportal"
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          text-decoration: underline;

          &:hover {
            text-decoration: none;
          }
        `}
      >
        RoboPortal
      </a>
    </footer>
  )
}
