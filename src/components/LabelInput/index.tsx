import { ReactElement } from 'react'

import { ContainerLabel } from './styles'

interface IProps {
  text: string
  children: ReactElement
}

export function LabelInput({ text, children }: IProps) {
  return (
    <ContainerLabel>
      <span>{text}</span>
      {children}
    </ContainerLabel>
  )
}
