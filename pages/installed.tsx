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

export default function Installed() {
  const [inputValue, setInputValue] = useState('')
  const [elementText, setElementText] = useState('')

  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleButtonClick = () => setElementText(inputValue)

  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5vh 2vw;
        color: black;
      `}
    >
      <h1
        css={css`
          color: #fff;
          margin-bottom: 60px;
        `}
      >
        Let&apos;s get you onboarded in 7 simple steps.
      </h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 400px 400px 560px 560px 200px 400px 400px;
          grid-row-gap: 40px;
          grid-column-gap: 4vw;
        `}
      >
        <div
          css={css`
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
          `}
        >
          <StepCard step="1">
            <h3>
              Open development tools, click <strong>Dakka</strong> tab and
              enable recording for this tab.
            </h3>
            <Image alt="step one" src={stepOne} width={1000} height={356} />
          </StepCard>
        </div>
        <div
          css={css`
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 2;
          `}
        >
          <StepCard step="2">
            <h3>
              Click <strong>Record</strong> button to start creating your first
              test.
            </h3>
            <Image alt="step one" src={stepTwo} width={1000} height={356} />
          </StepCard>
        </div>

        <div
          css={css`
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 3;
          `}
        >
          <StepCard step="3">
            <h3>
              Fill the input below with some text and click the button. You can
              stop recording now.
            </h3>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 32px;
                margin-bottom: 16px;
              `}
            >
              <TextField
                css={css`
                  margin-bottom: 32px;
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
            <Image alt="step three" src={stepThree} width={1000} height={356} />
          </StepCard>
        </div>
        <div
          css={css`
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 4;
          `}
        >
          <StepCard step="4">
            <h3>Use toolbar to drag and drop assertion block.</h3>
            <Image alt="step four" src={stepFour} width={1000} height={546} />
          </StepCard>
        </div>
        <div
          css={css`
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 5;
          `}
        >
          <StepCard step="5">
            <h3>
              Locate assertion source by using element locating tool on the box
              below.
            </h3>
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
                  padding: 8px;
                `}
              >
                {elementText}
              </div>
            )}
          </StepCard>
        </div>
        <div
          css={css`
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 6;
          `}
        >
          <StepCard step="6">
            <h3>Set assertion block params.</h3>
            <Image alt="step six" src={stepSix} width={500} height={398} />
          </StepCard>
        </div>
        <div
          css={css`
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 7;
          `}
        >
          <StepCard step="7">
            <h3>Export the test.</h3>
            <Image alt="step six" src={stepSeven} width={200} height={256} />
          </StepCard>
        </div>
      </div>
    </main>
  )
}
