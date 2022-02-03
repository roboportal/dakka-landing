import { css } from '@emotion/react'

interface StepCardProps {
  children: any
  step: number | string
}

export default function StepCard({ children, step }: StepCardProps) {
  return (
    <div
      css={css`
        min-height: 100px;
        min-width: 100px;
        position: relative;
        background-color: white;
        border: 1px solid black;
        border-radius: 4px;
        padding: 16px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
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
      {children}
    </div>
  )
}
