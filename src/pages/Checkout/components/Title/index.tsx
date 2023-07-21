import { TitleText } from './styles'

interface IProps {
  text: string
  color: 'white' | 'pink'
}

export function Title({ text, color }: IProps) {
  return <TitleText color={color}>{text}</TitleText>
}
