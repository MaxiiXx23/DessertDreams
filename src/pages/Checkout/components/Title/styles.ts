import styled from 'styled-components'

interface IProps {
  color: 'white' | 'pink'
}

export const TitleText = styled.h1<IProps>`
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  color: ${({ theme, color }) =>
    color === 'white' ? theme.white : theme.primary};
`
