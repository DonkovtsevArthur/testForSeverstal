import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControlWrapper, Label, Wrapper } from "ui";
import { ClearIconButton } from "ui/clear-icon-button";
import { FormControl } from "ui/form-control";

import { store } from "../store";

export const Title = () => {
  const dispatch = useDispatch();
  const { text } = useSelector(store.selector);
  console.log("Title -> text", text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(store.changeText(e.target.value));
  };

  return (
    <FormControlWrapper>
      <Label>Название уведомления</Label>
      <Wrapper>
        <FormControl value={text} placeholder="Введите текст уведомления" onChange={handleChange} />
        <ClearIconButton onClick={() => dispatch(store.clearText())} />
      </Wrapper>
    </FormControlWrapper>
  );
};
