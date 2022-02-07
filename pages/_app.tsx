import Head from 'next/head'
import { indigo } from '@mui/material/colors'
import { css } from '@emotion/react'

import { Footer } from '../components/Footer'

import '../styles/globals.css'

export default function App({ Component, id, pageProps }) {
  return (
    <div
      css={css`
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
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
