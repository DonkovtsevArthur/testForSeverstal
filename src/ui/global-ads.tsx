import React from "react";

import styled from "styled-components";
import { H2 } from "ui/typography";
import { Form } from "./form";

const Title = styled(H2)`
  margin-bottom: 40px;
`;

export const GlobalAds = () => {
  return (
    <>
      <Title>Информация</Title>
      <Form />
    </>
  );
};
