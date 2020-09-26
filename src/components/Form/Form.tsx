import View from "components/View";
import React, { useState } from "react";

import Input from "ui/Form/Input";
import InputFile from "ui/Form/InputFile";
import Textarea from "ui/Form/Textarea";

import { FormBtn, FormItem, FormWrapper } from "./styles";

import { Image as ImageJS } from "image-js";

import axios from "axios";

import test from "assets/images/512.png";

const Form = () => {
  const [title, setTitle] = useState("");
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const [text, setText] = useState("");
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const [image, setImage] = useState({ view: "", urlImg: "", isError: false, textError: "" });

  const handleChangeUrlImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:png)/g;

    const isError = !regex.test(value);

    setImage((prevState) => ({
      ...prevState,
      urlImg: value,
      isError,
      textError: isError ? "Не верно указана ссылка" : "",
    }));

    if (!isError && value) {
      const { data } = await axios.get(value, { responseType: "blob" });
      var reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = async function () {
        var base64data = reader.result;
        console.log(base64data);
        const result = base64data;
        // @ts-ignore
        const { alpha, width, height } = await ImageJS.load(result);
        console.log("handleChangeUrlImg -> width", width);
        if (width && image.textError) {
          setImage((prevState) => ({
            ...prevState,
            isError: false,
            textError: ``,
          }));
        }

        if (width !== 512 && height !== 512) {
          return setImage((prevState) => ({
            ...prevState,
            isError: true,
            textError: `размер ${width}x${height}px`,
          }));
        }

        if (alpha === 0) {
          console.log("handleChangeFile -> alpha", alpha);
          return setImage((prevState) => ({
            ...prevState,
            isError: true,
            textError: `${prevState.textError} не 32 разрядная PNG`,
          }));
        }

        // @ts-ignore
        setImage((prevState) => ({
          ...prevState,
          view: result,
          isError: false,
          textError: "",
        }));
      };
    }
  };

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const [file] = e.target.files;
    console.log("handleChangeFile -> file", file);

    const formData = new FormData();

    formData.append("image", file);
    console.log("handleChangeFile -> formData", formData);

    if (file) {
      const reader = new FileReader();
      reader.onload = async (upload) => {
        // @ts-ignore
        const result = upload.target.result;
        // @ts-ignore
        const { alpha, width, height } = await ImageJS.load(result);
        if (width && image.textError) {
          setImage((prevState) => ({
            ...prevState,
            isError: false,
            textError: ``,
          }));
        }

        if (width !== 512 && height !== 512) {
          return setImage((prevState) => ({
            ...prevState,
            isError: true,
            textError: `размер ${width}x${height}px`,
          }));
        }

        if (alpha === 0) {
          console.log("handleChangeFile -> alpha", alpha);
          return setImage((prevState) => ({
            ...prevState,
            isError: true,
            textError: `${prevState.textError} не 32 разрядная PNG`,
          }));
        }

        // @ts-ignore
        setImage((prevState) => ({
          ...prevState,
          view: result,
          isError: false,
          textError: "",
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("Form -> image", image);

  return (
    <FormWrapper>
      <FormItem>
        <Input
          label="Название уведомления"
          placeholder="Укажите текст заголовка"
          value={title}
          onChange={handleChangeTitle}
          onClear={() => setTitle("")}
        />
      </FormItem>

      <FormItem>
        <Textarea
          label="Текст уведомления"
          placeholder="Введите текст уведомления"
          value={text}
          onChange={handleChangeText}
          onClear={() => setText("")}
        />
      </FormItem>

      <FormItem>
        <Input
          label="Прикрепить изображение"
          placeholder="Укажите прямую ссылку на изображение"
          value={image.urlImg}
          isError={image.isError}
          textError={image.textError}
          onChange={handleChangeUrlImg}
          onClear={() => setImage({ urlImg: "", isError: false, textError: "", view: "" })}
        />
        <InputFile label="Обзор" onChange={handleChangeFile} />
      </FormItem>

      <FormItem>
        <View title={title} text={text} imgUrl={image.view} />
        <FormBtn disabled={!text || !title}>Отправить</FormBtn>
      </FormItem>
      <img src={test} />
    </FormWrapper>
  );
};

export default Form;
