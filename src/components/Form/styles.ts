import styled from "styled-components";
import { Button } from "ui/button";

const FormWrapper = styled.form``;

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 685px;
  margin-bottom: 22px;
`;

const FormBtn = styled(Button)`
  margin-left: 79px;
  margin-bottom: 5px;
`;

export { FormWrapper, FormItem, FormBtn };
