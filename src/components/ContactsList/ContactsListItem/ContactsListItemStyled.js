import styled from 'styled-components';

export const ContactsListItemStyled = styled.div`
  padding-left: 30px;
  list-style: cursor;
  .btnDelete {
    padding: 2px;
    margin: 5px 10px;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.colors.title};
    background-color: ${props => props.colors.button};
    &:hover {
      background-color: ${props => props.colors.edit};
    }
  }
`;
