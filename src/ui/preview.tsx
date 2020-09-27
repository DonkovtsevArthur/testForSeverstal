import React from "react";
import styled from "styled-components";
import viewIcon from "assets/icons/viewIcon.svg";
import { Label } from "ui";
import { H3 } from "./typography";
import { useSelector } from "react-redux";
import { getStateDefault } from "store/library";

const PreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelStyled = styled(Label)`
  display: block;
  margin-bottom: 22px;
`;

const BoxWrapper = styled.div`
  display: block;
  position: relative;
  width: 449px;
  height: 174px;
  background-image: url(${viewIcon});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Box = styled.div`
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

const Text = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.blue};
  word-break: break-word;
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
            <H3>{title}</H3>
            <Text>{description}</Text>
          </Content>
        </Box>
      </BoxWrapper>
    </PreviewStyled>
  );
};
