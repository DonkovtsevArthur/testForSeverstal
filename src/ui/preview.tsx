import React from "react";
import styled from "styled-components";
import viewIcon from "assets/icons/viewIcon.svg";
import { Label } from "ui";
import { H3 } from "./typography";
import { useSelector } from "react-redux";
import { getStateDefault } from "store/library";
import { device } from "theme/respond";

const PreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    width: auto;
  }
`;

const LabelStyled = styled(Label)`
  display: block;
  margin-bottom: 0;
  @media ${device.tablet} {
    margin-bottom: 22px;
  }
`;

const BoxWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 145px;
  background-image: url(${viewIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tablet} {
    width: 397px;
    height: 152px;
    background-size: cover;
    background-position: initial;
  }

  @media ${device.desktop} {
    width: 449px;
    height: 174px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 320px;
  width: calc(100% - 15px);
  max-height: 122px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 20px rgba(145, 160, 201, 0.2);
  border-radius: 13.7544px;
  padding: 10px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);

  @media ${device.tablet} {
    top: 55px;
    width: 350px;
    max-width: 100%;
    padding: 16px;
  }

  @media ${device.desktop} {
    top: 65px;
    width: 392px;
  }
`;

const Image = styled.div<{ imgUrl: string }>`
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

const Content = styled.div`
  overflow: auto;
`;

const H3Styled = styled(H3)`
  font-size: 15px;
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.blue};
  word-break: break-word;

  @media ${device.tablet} {
    font-size: 12px;
  }
`;

export const Preview = () => {
  const { title = "Укажите текст заголовка", description = "Введите текст уведомления", uploadImage } = useSelector(
    getStateDefault(["title", "description", "uploadImage"]),
  );

  return (
    <PreviewStyled>
      <LabelStyled>Предпросмотр</LabelStyled>
      <BoxWrapper>
        <Box>
          <Image imgUrl={uploadImage} />
          <Content>
            <H3Styled>{title}</H3Styled>
            <Text>{description}</Text>
          </Content>
        </Box>
      </BoxWrapper>
    </PreviewStyled>
  );
};
