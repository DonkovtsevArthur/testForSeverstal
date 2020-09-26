import React, { memo } from "react";

import { ViewBox, ViewBoxWrapper, ViewContent, ViewImg, ViewLabel, ViewText, ViewTitle, ViewWrapper } from "./styles";

type ViewType = {
  title?: string;
  text?: string;
  imgUrl?: any;
};

const titleDefault = "Укажите текст заголовка";
const textDefault = "Ведите текст уведомления";

export const View: React.FC<ViewType> = memo(({ title = "", text = "", imgUrl = "" }) => {
  return (
    <ViewWrapper>
      <ViewLabel>Предпростмотр</ViewLabel>
      <ViewBoxWrapper>
        <ViewBox>
          <ViewImg imgUrl={imgUrl} />
          <ViewContent>
            <ViewTitle>{title || titleDefault}</ViewTitle>
            <ViewText>{text || textDefault}</ViewText>
          </ViewContent>
        </ViewBox>
      </ViewBoxWrapper>
    </ViewWrapper>
  );
});
