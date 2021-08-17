import styled from 'styled-components';

export const AdvFormStyled = styled.div`
  padding: 20px 10px;
  border: 2px solid;
  border: 2px solid ${props => props.colors.title};
  border-radius: 6px;
  color: ${props => props.colors.title};

  .inputName {
    width: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
  }
  .btnAdd {
    display: block;
    margin-top: 30px;
    padding: 3px 5px;
    border-radius: 6px;
    cursor: pointer;
    color: ${props => props.colors.title};

    background-color: ${props => props.colors.button};
    &:hover {
      background-color: ${props => props.colors.edit};
    }
  }
`;
