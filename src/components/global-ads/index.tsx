import { Form } from "components/form";
import React from "react";
import styled from "styled-components";
import { H2 } from "ui/typography";

const GlobalAdsWrapper = styled.div``;

const Title = styled(H2)`
  margin-bottom: 40px;
`;

export const GlobalAds = () => {
  return (
    <GlobalAdsWrapper>
      <Title>Информация</Title>
      <Form />
    </GlobalAdsWrapper>
  );
};
