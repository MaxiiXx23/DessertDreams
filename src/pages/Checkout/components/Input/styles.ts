import styled from 'styled-components'

interface IInput {
  widthinput: number
}

export const InputContainer = styled.input<IInput>`
  width: ${({ widthinput }) => `${widthinput}%`};
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 8px;

  color: ${({ theme }) => theme.black};

  &:not(:disabled):hover {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`
