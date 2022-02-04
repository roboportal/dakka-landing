import { css, SerializedStyles } from '@emotion/react'

interface StepCardProps {
  children: any
  wrapperStyles: SerializedStyles
  header: string
  step: number | string
}

export default function StepCard({
  children,
  step,
  header,
  wrapperStyles,
}: StepCardProps) {
  return (
    <div css={wrapperStyles}>
      <div
        css={css`
          position: relative;
          background-color: white;
          border: 1px solid black;
          border-radius: 4px;
          padding: 2vh 1vw;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
            rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: -19px;
            left: -19px;
            height: 36px;
            width: 36px;
            border: 1px solid black;
            border-radius: 50%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            font-weight: 600;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
              rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
              rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
          `}
        >
          {step}
        </div>
        <h3
          css={css`
            text-align: center;
          `}
        >
          {header}
        </h3>
        {children}
      </div>
    </div>
  )
}
