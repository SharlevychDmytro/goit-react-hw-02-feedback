import styled from 'styled-components';

export const Button = styled.button`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
