import React from 'react'
import { useState } from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import StepCard from '../components/StepCard'

import stepOne from '../public/1.png'
import stepTwo from '../public/2.png'
import stepThree from '../public/3.png'
import stepFour from '../public/4.png'
import stepFiveA from '../public/5_a.png'
import stepFiveB from '../public/5_b.png'
import stepSix from '../public/6.png'
import stepSeven from '../public/7.png'
import { Header } from '../components/Header'
import {
  getDocumentsIds,
  getDocumentsNavigation,
  getDocumentsSearchIndex,
} from '../lib/api'
import { useSearch } from '../lib/useSearch'

export default function Installed({ id, searchIndex, navigation }) {
  const [inputValue, setInputValue] = useState('')
  const [elementText, setElementText] = useState('')

  const { doSearch } = useSearch(searchIndex, navigation)

  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleButtonClick = () => setElementText(inputValue)

  return (
    <>
      <Header id={id} handleSearch={doSearch} />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 5vw;
        `}
      >
        <h1
          css={css`
            color: #fff;
            margin-bottom: 8vh;
            text-align: center;
          `}
        >
          Let&apos;s get you onboarded in 7 simple steps.
        </h1>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            & > div {
              margin-bottom: 8vh;
            }
          `}
        >
          <StepCard
            step="1"
            header="Open development tools, click Dakka tab and
              enable recording for this tab."
            wrapperStyles={css`
              align-self: flex-start;
              min-width: 300px;
              width: 64vw;
            `}
          >
            <h3
              css={css`
                text-align: center;
              `}
            ></h3>
            <Image alt="step one" src={stepOne} width={1000} height={366} />
          </StepCard>

          <StepCard
            step="2"
            header="Click Record button to start creating your first
              test."
            wrapperStyles={css`
              align-self: flex-end;
              min-width: 300px;
              width: 64vw;
            `}
          >
            <Image alt="step one" src={stepTwo} width={1000} height={366} />
          </StepCard>

          <StepCard
            step="3"
            header="Fill the input below with some text and click the button. You can
              stop recording now."
            wrapperStyles={css`
              align-self: flex-start;
              min-width: 300px;
              width: 64vw;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 4vh;
                margin-bottom: 4vh;
              `}
            >
              <TextField
                css={css`
                  margin-bottom: 4vh;
                `}
                label="Enter Some Text Here"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                inputProps={{
                  'data-automation-id': 'input',
                }}
              />
              <Button
                variant="outlined"
                data-automation-id="button"
                onClick={handleButtonClick}
              >
                Click Button
              </Button>
            </div>
            <Image alt="step three" src={stepThree} width={1000} height={366} />
          </StepCard>

          <StepCard
            step="4"
            header="Use toolbar to drag and drop assertion block."
            wrapperStyles={css`
              align-self: flex-end;
              min-width: 300px;
              width: 68vw;
            `}
          >
            <Image alt="step four" src={stepFour} width={1000} height={508} />
          </StepCard>

          <StepCard
            step="5"
            header="Locate assertion source by using element locating tool on the box
              below."
            wrapperStyles={css`
              align-self: flex-start;
              min-width: 300px;
              width: 68vw;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                align-items: center;
              `}
            >
              <Image alt="step five a" src={stepFiveA} width={32} height={32} />
              <ArrowForwardIcon />
              <Image
                alt="step five b"
                src={stepFiveB}
                width={395}
                height={50}
              />
            </div>

            {elementText && (
              <div
                data-automation-id="element"
                css={css`
                  border: 1px solid #999;
                  border-radius: 4px;
                  margin-right: auto;
                  margin-left: auto;
                  padding: 2vh 1vw;
                  margin-top: 3vh;
                  color: black;
                `}
              >
                {elementText}
              </div>
            )}
          </StepCard>

          <StepCard
            step="6"
            header="Set assertion block params."
            wrapperStyles={css`
              width: 32vw;
              min-width: 300px;
            `}
          >
            <Image alt="step six" src={stepSix} width={500} height={398} />
          </StepCard>

          <StepCard
            step="7"
            header="Export the test."
            wrapperStyles={css`
              width: 16vw;
              min-width: 250px;
            `}
          >
            <Image alt="step six" src={stepSeven} />
          </StepCard>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const [id] = await getDocumentsIds()
  const navigation = await getDocumentsNavigation(id)
  const searchIndex = await getDocumentsSearchIndex()

  return {
    props: { id, navigation, searchIndex },
  }
}
