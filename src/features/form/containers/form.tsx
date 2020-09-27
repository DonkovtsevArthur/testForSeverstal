/* eslint-disable react-hooks/exhaustive-deps */
import { Description } from "features/description/containers/description";
import { Title } from "features/title/containers/title";
import { UploadImage } from "features/upload-image/containers/upload-image";
import { cancelBlurElement } from "library/cancel-blur-element";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStateDefault } from "store/library";
import styled from "styled-components";

import { Preloader } from "ui/preloader";
import { Button } from "../../../ui/button";
import { Preview } from "../../../ui/preview";
import { fetchForm, selector, setSubmitted } from "../store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const ButtonSubmit = styled(Button)`
  min-width: 211px;
  height: 55px;
  margin-left: 79px;
  margin-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
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
