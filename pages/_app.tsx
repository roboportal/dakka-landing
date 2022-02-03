import Head from 'next/head'
import { Footer } from '../components/Footer'
import { indigo } from '@mui/material/colors'
import { css } from '@emotion/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
