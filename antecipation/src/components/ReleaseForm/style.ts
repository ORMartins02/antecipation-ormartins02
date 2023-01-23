import styled from "styled-components";

export const DivForm = styled.div`
  width: 608;
  height: 389;
  padding-right: 30px;

  h4 {
    margin-left: 30px;
    font-size: 24px;
  }
`;

export const Form = styled.form`
  width: 251px;
  height: 249px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    font-size: 24px;
  }

  label {
    font-size: 14px;
  }

  input {
    max-width: 255px;
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
    margin-left: 30px;
  }

  select {
    max-width: 255px;
    height: 37px;
    font-size: 14px;
  }
`;
