import styled from "styled-components";

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-left: 5px;
  }

  select,
  input {
    border: 1px solid var(--border);
    border-radius: 8px;
    height: 35px;
    padding-left: 10px;
  }

  .error {
    height: 20px;
    display: flex;
    align-items: center;
    color: var(--cancel);
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
`;

export default StyledFormField;
