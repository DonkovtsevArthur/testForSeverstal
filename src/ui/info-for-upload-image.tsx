import React from "react";
import styled from "styled-components";
import { device } from "theme/respond";
import { P } from "./typography";

const InfoForUploadImageStyled = styled.div`
  position: absolute;
  top: auto;
  right: 0;
  bottom: -10px;
  width: 100px;

  @media ${device.tablet} {
    top: auto;
    right: 0;
    bottom: -75px;
    width: auto;
  }

  @media ${device.desktop} {
    top: auto;
    right: 0;
    bottom: -75px;
    width: 200px;
  }
  @media ${device.desktopBig} {
    top: 28px;
    right: -243px;
    bottom: auto;
  }

  p:first-child {
    margin-bottom: 5px;
  }
`;

const Text = styled(P)`
  font-size: 11px;
  line-height: 16px;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const InfoForUploadImage = () => {
  return (
    <InfoForUploadImageStyled>
      <Text italic> Значок в высоком разрешении</Text>
      <Text italic>512х512 px; 32-разрядный PNG</Text>
    </InfoForUploadImageStyled>
  );
};
