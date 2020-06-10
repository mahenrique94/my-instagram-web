import styled from 'styled-components'

interface Props {
  alt: string
  height?: number
  width?: number
  src: string
}

const Image = styled.img<Props>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

export default Image
