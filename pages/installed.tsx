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
          margin-bottom: 8vh;
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
        <div
          css={css`
            align-self: flex-start;
            width: 64vw;
          `}
        >
          <StepCard step="1">
            <h3>
              Open development tools, click <strong>Dakka</strong> tab and
              enable recording for this tab.
            </h3>
            <Image alt="step one" src={stepOne} width={1000} height={366} />
          </StepCard>
        </div>
        <div
          css={css`
            align-self: flex-end;
            width: 64vw;
          `}
        >
          <StepCard step="2">
            <h3>
              Click <strong>Record</strong> button to start creating your first
              test.
            </h3>
            <Image alt="step one" src={stepTwo} width={1000} height={366} />
          </StepCard>
        </div>

        <div
          css={css`
            align-self: flex-start;
            width: 64vw;
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
        </div>
        <div
          css={css`
            align-self: flex-end;
            width: 68vw;
          `}
        >
          <StepCard step="4">
            <h3>Use toolbar to drag and drop assertion block.</h3>
            <Image alt="step four" src={stepFour} width={1000} height={508} />
          </StepCard>
        </div>
        <div
          css={css`
            align-self: flex-start;
            width: 68vw;
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
                  padding: 2vh 1vw;
                  margin-top: 3vh;
                `}
              >
                {elementText}
              </div>
            )}
          </StepCard>
        </div>
        <div
          css={css`
            width: 32vw;
          `}
        >
          <StepCard step="6">
            <h3>Set assertion block params.</h3>
            <Image alt="step six" src={stepSix} width={500} height={398} />
          </StepCard>
        </div>
        <div
          css={css`
            width: 16vw;
          `}
        >
          <StepCard step="7">
            <h3>Export the test.</h3>
            <Image alt="step six" src={stepSeven} />
          </StepCard>
        </div>
      </div>
    </main>
  )
}
