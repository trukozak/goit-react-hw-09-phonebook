import styled from 'styled-components';

const AuthFormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 6px;

  label {
    margin-bottom: 20px;
  }
  input {
    width: 300px;
    margin-bottom: 10px;
    margin-left: 5px;
    padding: 5px;
    border-color: teal;
    border-radius: 5px;
  }
  button {
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }
`;

export default AuthFormStyled;
