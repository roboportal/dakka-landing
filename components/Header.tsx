import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { css } from '@emotion/react'

import inlineDakkaLogo from '../public/dakka_1.svg'

export function Header({ id }) {
  const { asPath } = useRouter()

  const links = useMemo(() => {
    const [, firstLevelInPath] = asPath.split('/')

    return [
      { title: 'Getting started', link: '/getting_started' },
      { title: 'Documentation', link: `/documentation/${id}` },
    ].map((it) => {
      const [, firstLevelInLink] = it.link.split('/')
      const isMatch = firstLevelInLink === firstLevelInPath

      return { ...it, isMatch }
    })
  }, [id, asPath])

  return (
    <nav
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 24px 32px 16px;
        background: white;
        border-bottom: 1px solid #eaeaea;
        justify-content: space-between;
      `}
    >
      <Link href="/">
        <a>
          <Image
            alt="dakka logo"
            src={inlineDakkaLogo}
            width={92}
            height={34}
            css={css`
              cursor: pointer;
              color: #4a4a4a;
            `}
          />
        </a>
      </Link>

      <div>
        {links.map(({ title, link, isMatch }, index) => {
          return (
            <Link key={title} href={link}>
              <a
                css={css`
                  margin-left: ${index ? '16px' : '32px'};
                  color: black;
                  font-size: 1em;
                  text-decoration: none;
                  color: #4a4a4a;
                  padding-bottom: 6px;
                  cursor: pointer;

                  &:hover {
                    text-decoration: none;
                  }
                `}
              >
                {title}
              </a>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
