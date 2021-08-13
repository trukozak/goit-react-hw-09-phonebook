import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
  .text {
    font-weight: 700;
    font-size: 16px;
    color: #f1e7f3;
  }
  button {
    margin-left: 10px;
    font-size: 14px;
    padding: 10px;
    font-weight: 700;
    color: #6d92c2;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0px 1px 13px 0px #696665;
    cursor: pointer;
  }
  button:hover,
  :focus {
    color: #c7c1c1;
    box-shadow: 0px 1px 13px 0px #e9d8d9;
  }
`;
