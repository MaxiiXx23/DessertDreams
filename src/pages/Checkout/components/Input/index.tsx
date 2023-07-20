import { HTMLInputTypeAttribute, HtmlHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { InputContainer } from './styles'

interface IInputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  nameRegister: string
  widthinput: number
  disabled?: boolean
  type: HTMLInputTypeAttribute
}

export function Input({
  nameRegister,
  widthinput,
  disabled,
  type,
  ...rest
}: IInputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer
      type={type}
      {...register(nameRegister)}
      widthinput={widthinput}
      disabled={disabled}
      {...rest}
    />
  )
}
