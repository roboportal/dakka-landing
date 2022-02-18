import React from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

import {
  getDocumentsIds,
  getDocumentsNavigation,
  getDocumentsSearchIndex,
} from '../lib/api'
import { Header } from '../components/Header'
import { useSearch } from '../lib/useSearch'
import { DescriptionContainer } from '../components/DescriptionContainer'
import { Menu } from '../components/Menu'

export default function LandingPage({
  id,
  searchIndex,
  navigation,
  onOpenNav,
  open,
}) {
  const { doSearch } = useSearch(searchIndex, navigation)
  return (
    <>
      <Header id={id} handleSearch={doSearch} onOpenNav={onOpenNav} />
      <Menu id={id} open={open} onOpenNav={onOpenNav} />
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h1
          css={css`
            margin: 0;
            padding-top: 2rem;
            font-size: 3.5em;
            text-align: center;
          `}
        >
          Dakka
        </h1>
        <h2
          css={css`
            font-weight: 400;
            margin: 0;
            padding-top: 1rem;
            font-size: 2rem;
            text-align: center;
          `}
        >
          Open source test generation tool
        </h2>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
          `}
        >
          <Button
            css={css`
              color: white;
              border-color: #0c97a8;
              color: #0c97a8;
              border-radius: 2px;

              &:hover {
                color: #0c97a8;
                border-color: #0c97a8;
              }
            `}
            variant="outlined"
            size="large"
            onClick={() => {}}
          >
            Install Dakka
          </Button>
        </div>
      </div>
      <DescriptionContainer />
    </>
  )
}

export async function getStaticProps() {
  const [id] = await getDocumentsIds()
  const searchIndex = await getDocumentsSearchIndex()
  const navigation = await getDocumentsNavigation(id)

  return {
    props: { id, searchIndex, navigation },
  }
}
