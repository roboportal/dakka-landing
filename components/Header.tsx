import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import MLink from '@mui/material/Link'

import { css } from '@emotion/react'

import inlineDakkaLogo from '../public/dakka-logo-inline.png'

export function Header({ id }) {
  const { asPath } = useRouter()

  const links = useMemo(() => {
    const [, firstLevelInPath] = asPath.split('/')

    return [
      { title: 'Documentation', link: `/doc/${id}` },
      { title: 'Getting started', link: '/installed' },
    ].map((it) => {
      const [, firstLevelInLink] = it.link.split('/')
      const isMatch = firstLevelInLink === firstLevelInPath
      console.log(firstLevelInLink, firstLevelInPath)
      return { ...it, isMatch }
    })
  }, [id, asPath])
  return (
    <nav
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 16px;
      `}
    >
      <Link href="/" passHref>
        <Image
          alt="dakka logo"
          src={inlineDakkaLogo}
          width={108}
          height={34}
          css={css`
            cursor: pointer;
          `}
        />
      </Link>

      {links.map(({ title, link, isMatch }, index) => {
        return (
          <Link key={title} href={link} passHref>
            <MLink
              css={css`
                margin-left: ${index ? '16px' : '32px'};
                color: white;
                font-size: 1.2em;
                font-weight: 600;
                text-decoration: ${isMatch ? 'underline' : 'none'};
                padding-bottom: 6px;
                &:hover {
                  text-decoration: underline;
                }
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
