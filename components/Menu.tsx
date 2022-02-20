import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import Drawer from '@mui/material/Drawer'
import Link from 'next/link'
import Image from 'next/image'
import gitHubIcon from '../public/github.png'
import MLink from '@mui/material/Link'
import { Search } from './Search'

type MenuProps = {
  id: string
  open: boolean
  onOpenNav: () => void
  navigation?: any[]
  doSearch: (value: string) => void
}

export function Menu({
  id,
  open,
  onOpenNav,
  navigation = [],
  doSearch,
}: MenuProps) {
  const { asPath } = useRouter()

  const links = useMemo(() => {
    const [, firstLevelInPath] = asPath.split('/')

    return [
      { title: 'Home', link: '/' },
      { title: 'Getting started', link: '/getting_started' },
      { title: 'Documentation', link: `/documentation/${id}` },
    ].map((it) => {
      const [, firstLevelInLink] = it.link.split('/')
      const isMatch =
        firstLevelInLink === firstLevelInPath &&
        firstLevelInLink !== 'documentation'

      return { ...it, isMatch }
    })
  }, [id, asPath])

  return (
    <Drawer anchor="left" open={open} onClose={onOpenNav}>
      <Search handleSearch={doSearch} />
      <div
        css={css`
          padding: 32px 56px 16px 32px;
          display: flex;
          flex-direction: column;
          min-width: 280px;
        `}
      >
        {links.map(({ title, link, isMatch }, index) => {
          return (
            <Link key={title} href={link}>
              <a
                css={css`
                  font-size: 1em;
                  text-decoration: underline;
                  color: ${isMatch ? '#0c97a8' : '#191919'};
                  padding-bottom: 6px;
                  cursor: pointer;
                  margin-bottom: 16px;
                  padding: 4px;
                  font-size: 1.125rem;

                  &:hover {
                    color: #046e7a;
                  }
                `}
                onClick={onOpenNav}
              >
                {title}
              </a>
            </Link>
          )
        })}

        <Link href="https://github.com/roboportal/dakka">
          <a
            css={css`
              margin: 1rem 1rem;
            `}
          >
            <Image alt="github logo" src={gitHubIcon} width={24} height={24} />
          </a>
        </Link>

        {navigation.map(({ id, title, isMatch }) => (
          <Link key={id} href={`/documentation/${id}`} passHref>
            <MLink
              onClick={onOpenNav}
              css={css`
                margin-bottom: 16px;
                color: ${isMatch ? '#0c97a8' : '#2e3138'};
                padding: 4px;
                font-size: 1.125rem;
                font-weight: 400;
                text-decoration: none;
                text-decoration: underline;
              `}
            >
              {title}
            </MLink>
          </Link>
        ))}
      </div>
    </Drawer>
  )
}
