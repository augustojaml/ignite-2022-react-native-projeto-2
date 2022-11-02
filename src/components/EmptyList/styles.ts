import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    padding-top: 50px;
  `}
`;
