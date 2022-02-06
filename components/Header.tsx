import Link from 'next/link'
import MLink from '@mui/material/Link'

import { css } from '@emotion/react'

export function Header({ id }) {
  const links = [
    { title: 'Home', link: '/' },
    { title: 'Documentation', link: `/doc/${id}` },
    { title: 'Getting started', link: '/installed' },
  ]
  return (
    <nav
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
      `}
    >
      {links.map(({ title, link }) => {
        return (
          <Link key={title} href={link} passHref>
            <MLink
              css={css`
                margin-left: 16px;
              `}
            >
              {title}
            </MLink>
          </Link>
        )
      })}
    </nav>
  )
}
