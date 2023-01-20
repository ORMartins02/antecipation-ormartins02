import styled from "styled-components";

export const DivForm = styled.div`
  width: 377;
  height: 389;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 24px;
  }

  label {
    font-size: 14px;
  }

  input {
    width: 251px;
    height: 37px;
    font-size: 14px;
  }

  span {
    color: #cecece;
    font-size: 11px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;
