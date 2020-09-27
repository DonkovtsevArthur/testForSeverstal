import { Form } from "features/form/containers/form";
import React from "react";

import styled from "styled-components";
import { H2 } from "ui/typography";

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
