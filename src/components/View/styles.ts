import styled from "styled-components";

import viewIcon from "assets/icons/viewIcon.svg";
import { Label } from "ui/Form";

const ViewWrapper = styled.div``;

const ViewLabel = styled(Label)`
  display: block;
  margin-bottom: 22px;
`;

const ViewBoxWrapper = styled.div`
  display: block;
  position: relative;
  width: 449px;
  height: 174px;
  background-image: url(${viewIcon});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ViewBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 392px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 20px rgba(145, 160, 201, 0.2);
  border-radius: 13.7544px;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
`;

const ViewImg = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.lavenderLight};
  width: 64px;
  height: 64px;
  border-radius: 6.87719px;
  margin-right: 16px;
`;

const ViewContent = styled.div``;

const ViewTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 5px;
`;

const ViewText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.blue};
`;

export { ViewWrapper, ViewBoxWrapper, ViewBox, ViewImg, ViewContent, ViewTitle, ViewText, ViewLabel };
