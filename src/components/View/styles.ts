import styled from "styled-components";

import viewIcon from "assets/icons/viewIcon.svg";
import { Label } from "ui/form";

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
  max-height: 122px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 20px rgba(145, 160, 201, 0.2);
  border-radius: 13.7544px;
  padding: 16px;
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const ViewImg = styled.div<{ imgUrl: any }>`
  display: block;
  background-color: ${({ theme }) => theme.colors.lavenderLight};
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  transition: min-width 0.55s ease;

  min-width: ${({ imgUrl }) => (imgUrl ? "64px" : "0")};
  max-width: 64px;
  height: 64px;
  border-radius: 6.87719px;
  margin-right: 16px;
`;

const ViewContent = styled.div`
  overflow: auto;
`;

const ViewTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 5px;
  word-break: break-word;
`;

const ViewText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.blue};
  word-break: break-word;
`;

export { ViewWrapper, ViewBoxWrapper, ViewBox, ViewImg, ViewContent, ViewTitle, ViewText, ViewLabel };
