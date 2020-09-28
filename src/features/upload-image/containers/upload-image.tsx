/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormControlWrapper, FormWrapper, Label, Wrapper } from "ui";
import { FormControl } from "ui/form-control";
import { OverviewIcon } from "ui/icons/overview";
import { UploadImageControl } from "../components/upload-image-control";
import { clearImage, fetchImage, setError, setFileToView, setUrl, uploadImageSelector } from "../store";
import { ClearIconButton } from "ui/clear-icon-button";
import { InfoForUploadImage } from "ui/info-for-upload-image";
import { Preloader } from "ui/preloader";
import { getErrorFormSelector } from "features/form/store";

const UploadImageFileStyled = styled(FormWrapper)`
  position: relative;
  width: auto;
`;

const UploadImageStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadImage = () => {
  const dispatch = useDispatch();
  const { url, error, loading, value } = useSelector(uploadImageSelector);
  const errorFromForm = useSelector(getErrorFormSelector);

  useEffect(() => {
    if (!value && errorFromForm && !error.length) {
      dispatch(setError("Пустое поле"));
    }
  }, [errorFromForm, value, dispatch, error]);

  useEffect(() => {
    if (url && !error.length) {
      dispatch(fetchImage(url));
    }
  }, [url]);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUrl(value));
  };

  const handleChangeFile = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files) {
      dispatch(setFileToView(files));
    }
  };

  const textError = error.join(", ");
  return (
    <FormControlWrapper>
      <Label>Прикрепить изображение {loading && <Preloader />}</Label>

      <UploadImageStyled>
        <Wrapper style={{ width: "100%" }} textError={textError}>
          <FormControl
            textError={textError}
            value={url}
            placeholder="Укажите прямую ссылку на изображение"
            onChange={handleChange}
          />
          <ClearIconButton onClick={() => dispatch(clearImage())} />
        </Wrapper>
        <UploadImageFileStyled>
          <UploadImageControl id="file" type="file" accept=".png" onChange={handleChangeFile} />
          <Label htmlFor="file">
            <OverviewIcon />
            Обзор
          </Label>
        </UploadImageFileStyled>
      </UploadImageStyled>
      <InfoForUploadImage />
    </FormControlWrapper>
  );
};
