/* eslint-disable react-hooks/exhaustive-deps */
import { Description } from "features/description/containers/description";
import { Title } from "features/title/containers/title";
import { UploadImage } from "features/upload-image/containers/upload-image";
import { cancelBlurElement } from "library/cancel-blur-element";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStateDefault } from "store/library";
import styled from "styled-components";
import { device } from "theme/respond";

import { Preloader } from "ui/preloader";
import { Button } from "../../../ui/button";
import { Preview } from "../../../ui/preview";
import { fetchForm, selector, setSubmitted } from "../store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ButtonSubmit = styled(Button)`
  min-width: 100%;
  height: 55px;
  margin: 10px 0 0 0;

  padding-left: 0;
  padding-right: 0;

  @media ${device.tablet} {
    margin: 0 0 5px 13px;
    min-width: 211px;
  }
  @media ${device.desktop} {
    margin: 0;
    margin-left: 79px;
  }
`;

export const Form = () => {
  const dispatch = useDispatch();
  const { loading, submitted } = useSelector(selector);

  const { title, description, uploadImage } = useSelector(getStateDefault(["title", "description", "uploadImage"]));

  useEffect(() => {
    if (submitted) {
      dispatch(setSubmitted());
    }
  }, [title, description, uploadImage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchForm({ title, description, uploadImage }));
  };

  const textInButton = submitted ? "Отправлено" : "Отправить";

  return (
    <form onSubmit={handleSubmit}>
      <Title />
      <Description />
      <UploadImage />
      <Wrapper>
        <Preview />
        <ButtonSubmit onMouseLeave={cancelBlurElement}>{loading ? <Preloader /> : textInButton}</ButtonSubmit>
      </Wrapper>
    </form>
  );
};
