import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "ui/form/input";
import InputFile from "ui/form/input-file";
import Textarea from "ui/form/textarea";
import View from "components/View";

import { FormBtn, FormItem, FormWrapper } from "./styles";

import axios from "axios";

import test from "assets/images/512.png";

import { clearTitlePush, setTitlePush } from "store/titlePush/actions";
import { getTitlePush } from "store/titlePush/selectors";
import { getDescPush } from "store/descPush/selectors";
import { clearDescPush, setDescPush } from "store/descPush/actions";
import { getImagePush } from "store/imagePush/selectors";
import {

  clearImagePush,

  setUrlImagePush,
  setViewImagePush,
} from "store/imagePush/actions";
import { getImageFileReader, getParamsImage } from "./helpers";

const Form = () => {
  const dispatchRedux = useDispatch();

  const title = useSelector(getTitlePush);
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRedux(setTitlePush({ text: e.target.value }));
  };

  const desc = useSelector(getDescPush);
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatchRedux(setDescPush({ text: e.target.value }));
  };

  const image = useSelector(getImagePush);
  const handleChangeUrlImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:png)/g;
    const isError = !regex.test(value);
    const textError = isError ? "Не верно указана ссылка" : "";

    dispatchRedux(setUrlImagePush({ url: value, isError, textError }));

    if (!isError && value) {
      const { data } = await axios.get(value, { responseType: "blob" });
      getImageFileReader(data, async (upload) => {
        const { result, alpha, width, height } = await getParamsImage(upload);
        dispatchRedux(setViewImagePush({ view: result, width, height, alpha, error: image.textError }));
      });
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const [file] = e.target.files;

    getImageFileReader(file, async (upload) => {
      const { result, alpha, width, height } = await getParamsImage(upload);
      dispatchRedux(setViewImagePush({ view: result, width, height, alpha, error: image.textError }));
    });
  };

  return (
    <FormWrapper>
      <FormItem>
        <Input
          label="Название уведомления"
          placeholder="Укажите текст заголовка"
          value={title.text}
          onChange={handleChangeTitle}
          onClear={() => dispatchRedux(clearTitlePush())}
        />
      </FormItem>

      <FormItem>
        <Textarea
          label="Текст уведомления"
          placeholder="Введите текст уведомления"
          value={desc.text}
          onChange={handleChangeText}
          onClear={() => dispatchRedux(clearDescPush())}
        />
      </FormItem>

      <FormItem>
        <Input
          label="Прикрепить изображение"
          placeholder="Укажите прямую ссылку на изображение"
          value={image.url}
          isError={image.isError}
          textError={image.textError.join(", ")}
          onChange={handleChangeUrlImg}
          onClear={() => dispatchRedux(clearImagePush())}
        />
        <InputFile label="Обзор" onChange={handleChangeFile} />
      </FormItem>

      <FormItem>
        <View title={title.text} text={desc.text} imgUrl={image.view} />
        <FormBtn disabled={!desc.text || !title}>Отправить</FormBtn>
      </FormItem>
      <img src={test} />
    </FormWrapper>
  );
};

export default memo(Form);
