import React from "react";
import styled from "styled-components";
import { P } from "./typography";

const InfoForUploadImageStyled = styled.div`
  position: absolute;
  top: 28px;
  right: -243px;
  width: 200px;

  p:first-child {
    margin-bottom: 5px;
  }
`;

export const InfoForUploadImage = () => {
  return (
    <InfoForUploadImageStyled>
      <P italic> Значок в высоком разрешении</P>
      <P italic>512х512 px; 32-разрядный PNG</P>
    </InfoForUploadImageStyled>
  );
};
