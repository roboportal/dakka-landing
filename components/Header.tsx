import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Search } from '../components/Search'

import { css } from '@emotion/react'

import inlineDakkaLogo from '../public/dakka_1.svg'

export function Header({ id, handleSearch }) {
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
        flex-wrap: wrap;

        @media (max-width: 678px) {
          align-items: start;
          padding: 24px 16px 16px;
        }
      `}
    >
      <Link href="/">
        <a
          css={css`
            flex: 1;
          `}
        >
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

      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-right: 20px;

          @media (max-width: 678px) {
            align-items: end;
            flex-direction: column-reverse;
            margin-right: 0px;
            margin-bottom: 16px;
          }
        `}
      >
        {links.map(({ title, link, isMatch }, index) => {
          return (
            <Link key={title} href={link}>
              <a
                css={css`
                  margin-left: ${index ? '16px' : '32px'};
                  color: black;
                  font-size: 1em;
                  text-decoration: ${isMatch ? 'underline' : 'none'};
                  color: ${isMatch ? '#0c97a8' : '#4a4a4a'};
                  padding-bottom: 6px;
                  cursor: pointer;

                  &:hover {
                    color: #046e7a;
                  }

                  @media (max-width: 678px) {
                    text-decoration: underline;
                  }
                `}
              >
                {title}
              </a>
            </Link>
          )
        })}
      </div>
      <Search handleSearch={handleSearch} />
    </nav>
  )
}
