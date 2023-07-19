import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
`

export const Count = styled.span`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  top: -0.5rem;
  right: -0.5rem;

  background-color: ${({ theme }) => theme.primary};

  color: ${({ theme }) => theme.white};

  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;

  font-size: ${({ theme }) => theme.fontSize.md};
`
