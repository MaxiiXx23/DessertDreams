import styled from 'styled-components'

import * as HoverCard from '@radix-ui/react-hover-card'

export const Root = styled(HoverCard.Root)``
export const Trigger = styled(HoverCard.Trigger)`
  cursor: pointer;
`
export const Portal = styled(HoverCard.Portal)``

export const Content = styled(HoverCard.Content)`
  border-radius: 8px;
  padding: 1rem;
  width: 18rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  color: ${({ theme }) => theme.white};

  background-color: ${({ theme }) => theme.primary};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const Arrow = styled(HoverCard.Arrow)`
  fill: ${({ theme }) => theme.primary};
`
