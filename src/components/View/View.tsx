import React, { memo } from "react";

import { ViewBox, ViewBoxWrapper, ViewContent, ViewImg, ViewLabel, ViewText, ViewTitle, ViewWrapper } from "./styles";

type ViewType = {
  title?: string;
  text?: string;
};

const View: React.FC<ViewType> = ({ title = "Укажите текст заголовка", text = "Ведите текст уведомления" }) => {
  return (
    <ViewWrapper>
      <ViewLabel>Предпростмотр</ViewLabel>
      <ViewBoxWrapper>
        <ViewBox>
          <ViewImg />
          <ViewContent>
            <ViewTitle>{title}</ViewTitle>
            <ViewText>{text}</ViewText>
          </ViewContent>
        </ViewBox>
      </ViewBoxWrapper>
    </ViewWrapper>
  );
};

export default memo(View);
