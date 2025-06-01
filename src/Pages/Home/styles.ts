import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

`;

export const BaseCountownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountownButton)`
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme['gray-100']};

  &:not(:disabled):hover{
    background: ${props => props.theme['green-700']};
  }
`;

export const StopCountdownButton = styled(BaseCountownButton)`
  background: ${props => props.theme['red-500']};
  color: ${props => props.theme['gray-100']};

  &:not(:disabled):hover{
    background: ${props => props.theme['red-700']};
  }
`;
