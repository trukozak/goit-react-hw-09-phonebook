import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 0 40px;
  min-height: 100vh;
  color: ${props => props.colors.title};
  background-color: ${props => props.colors.background};
`;
