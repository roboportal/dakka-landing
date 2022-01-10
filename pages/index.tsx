import Head from 'next/head';
import { css } from '@emotion/react';
import { indigo, brown } from '@mui/material/colors';
import Button from '@mui/material/Button';

export default function LandingPage() {
  return (
    <div
      css={css`
        padding: 0 2rem;
        background: ${indigo[700]};
        color: white;
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Dakka - increase test coverage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;
        `}
      >
        <h1
          css={css`
            margin: 0;
            padding-top: 4rem;
            font-size: 3.5rem;
            text-align: center;
          `}
        >
          Increase test coverage
        </h1>

        <p
          css={css`
            margin: 1.5rem 0;
            line-height: 1.5;
            font-size: 1.5rem;
            text-align: center;
          `}
        >
          <span
            css={css`
              margin-right: 5px;
              font-size: 1.5rem;
            `}
          >
            Get started by installing plugin
          </span>
          <a
            css={css`
              font-size: 1.8rem;
              color: ${brown[100]};
              border-bottom: 1px solid ${brown[100]};
            `}
            href=""
          >
            Dakka
          </a>
        </p>

        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Button
            css={css`
              color: white;
              border-color: white;
            `}
            variant="outlined"
            size="large"
            onClick={() => {}}
          >
            Install Dakka
          </Button>
        </div>
      </main>

      <footer
        css={css`
          display: flex;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
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
            color: ${brown[100]};
          `}
        >
          RoboPortal
        </a>
      </footer>
    </div>
  );
}
