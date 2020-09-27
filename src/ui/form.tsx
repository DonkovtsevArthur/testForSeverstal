import { Description } from "features/description/containers/description";
import { Title } from "features/title/containers/title";
import { UploadImage } from "features/upload-image/containers/upload-image";
import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Preview } from "./preview";

const Submit = styled(Button)`
  margin-left: 79px;
  margin-bottom: 5px;
`;

export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Title />
      <Description />
      <UploadImage />
      <Preview />
      {/* <Submit disabled={!desc.text || !title}>Отправить</Submit> */}
    </form>
  );
};
