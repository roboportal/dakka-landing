import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import { css } from '@emotion/react'
import screen4 from '../public/screen4.png'
import screen5 from '../public/screen5.png'
import screen6 from '../public/screen6.png'
import screen7 from '../public/screen7.png'

const images = [
  {
    src: screen4,
  },
  {
    src: screen6,
  },
  {
    src: screen5,
  },
  {
    src: screen7,
  },
]

export function ImageCarousel() {
  return (
    <Carousel>
      {images.map((item, i) => (
        <Image
          key={i}
          width={969}
          height={395}
          alt="dakka logo"
          src={item.src}
          css={css`
            cursor: pointer;
            color: #4a4a4a;
            border-radius: 4px;
          `}
        />
      ))}
    </Carousel>
  )
}
