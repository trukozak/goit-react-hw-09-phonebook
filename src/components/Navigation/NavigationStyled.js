import styled from 'styled-components';
export const NavigationContainer = styled.nav`
  padding-left: 10px;
  padding-right: 10px;
  .navList {
    display: flex;
    list-style: none;
  }
  .navItem {
    margin-right: 20px;
  }
  .navLink {
    color: white;
    text-decoration: none;
  }
  .navLinkActive {
    border-bottom: 2px solid;
  }
`;
