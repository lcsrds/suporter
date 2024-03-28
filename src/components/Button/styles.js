import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  font-weight: 600;
  padding: 1.6rem;
  border-radius: 0.8rem;

  &:disabled {
    opacity: 0.5;
  }
`
