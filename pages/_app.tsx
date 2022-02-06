import Head from 'next/head'
import { indigo } from '@mui/material/colors'
import { css } from '@emotion/react'

import { Footer } from '../components/Footer'

import '../styles/globals.css'

export default function MyApp({ Component, id, pageProps }) {
  return (
    <div
      css={css`
        padding: 0 2rem;
        background: ${indigo[700]};
        color: white;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Head>
        <title>Dakka</title>
        <meta name="description" content="Dakka - increase test coverage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 5vh 2vw;
        `}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
