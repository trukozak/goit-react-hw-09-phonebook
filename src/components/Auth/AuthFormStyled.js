import styled from 'styled-components';

const AuthFormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 2px solid ${props => props.colors.title};
  border-radius: 6px;
  color: ${props => props.colors.title};

  label {
    margin-bottom: 20px;
  }
  input {
    width: 300px;
    margin-bottom: 10px;
    margin-left: 5px;
    padding: 5px;
    border-color: ${props => props.colors.edit};
    border-radius: 5px;
  }
  button {
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }
`;

export default AuthFormStyled;
