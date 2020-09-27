import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormControlWrapper, FormWrapper, Label, Wrapper } from "ui";
import { FormControl } from "ui/form-control";
import { OverviewIcon } from "ui/icons/overview";
import { UploadImageControl } from "../components/upload-image-control";
import { clearImage, setUrlImage, setViewImage, uploadImageSelector } from "../store";
import { getImageFileReader, getParamsImage } from "./helpers";
import axios from "axios";
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

export const UploadImage = () => {
  const dispatch = useDispatch();
  const { url, textError, isError } = useSelector(uploadImageSelector);
  console.log("UploadImage -> textError", textError);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:png)/g;
    const isError = !regex.test(value);
    const textError = isError ? "Не верно указана ссылка" : "";

    dispatch(setUrlImage({ url: value, isError, textError }));

    if (!isError && value) {
      const { data } = await axios.get(value, { responseType: "blob" });
      getImageFileReader(data, async (upload) => {
        const { result, alpha, width, height } = await getParamsImage(upload);
        dispatch(setViewImage({ view: result, width, height, alpha, error: [textError] }));
      });
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files as FileList;

    getImageFileReader(file, async (upload) => {
      const { result, alpha, width, height } = await getParamsImage(upload);
      dispatch(setViewImage({ view: result, width, height, alpha, error: textError }));
    });
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
