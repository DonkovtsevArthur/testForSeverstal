import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormControlWrapper, FormWrapper, Label, Wrapper } from "ui";
import { FormControl } from "ui/form-control";
import { OverviewIcon } from "ui/icons/overview";
import { UploadImageControl } from "../components/upload-image-control";
import { clearImage, setUrlImage, setViewFromFile, setViewFromUrl, uploadImageSelector } from "../store";
import { ClearIconButton } from "ui/clear-icon-button";
import { InfoForUploadImage } from "ui/info-for-upload-image";

const UploadImageFileStyled = styled(FormWrapper)`
  position: relative;
  width: auto;
`;

const UploadImageStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:png)/gi;

export const UploadImage = () => {
  const dispatch = useDispatch();
  const { url, textError, isError } = useSelector(uploadImageSelector);

  const handleChange = async ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const isError = !regex.test(value);
    const textError = isError && value ? "Не верно указана ссылка" : "";

    dispatch(setUrlImage({ url: value, isError, textError }));

    if (value) {
      dispatch(setViewFromUrl(value));
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files as FileList;
    dispatch(setViewFromFile(file));
  };

  return (
    <FormControlWrapper>
      <Label>Прикрепить изображение</Label>
      <UploadImageStyled>
        <Wrapper style={{ width: "100%" }} isError={isError} textError={textError.join(", ")}>
          <FormControl value={url} placeholder="Укажите прямую ссылку на изображение" onChange={handleChange} />
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
