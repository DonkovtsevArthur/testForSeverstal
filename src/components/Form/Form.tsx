import View from "components/View";
import React from "react";
import { Button } from "ui/Btn";
import Input from "ui/Form/Input";
import InputFile from "ui/Form/InputFile";
import Textarea from "ui/Form/Textarea";

import { FormBtn, FormItem, FormWrapper } from "./styles";

const Form = () => {
  return (
    <FormWrapper>
      <FormItem>
        <Input label="Название уведомления" placeholder="Укажите текст заголовка" />
      </FormItem>

      <FormItem>
        <Textarea label="Текст уведомления" placeholder="Введите текст уведомления" value="fdf" />
      </FormItem>

      <FormItem>
        <Input label="Прикрепить изображение" placeholder="Укажите прямую ссылку на изображение" value="fdf" />
        <InputFile label="Обзор" />
      </FormItem>

      <FormItem>
        <View />
        <FormBtn>Отправить</FormBtn>
      </FormItem>
    </FormWrapper>
  );
};

export default Form;
