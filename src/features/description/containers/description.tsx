import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormControlWrapper, Label, Wrapper } from "ui";
import { ClearIconButton } from "ui/clear-icon-button";
import { FormControl } from "ui/form-control";

import { store } from "../store";

export const Description = () => {
  const dispatch = useDispatch();
  const { text } = useSelector(store.selector);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(store.changeText(e.target.value));
  };

  return (
    <FormControlWrapper>
      <Label>Текст уведомления</Label>
      <Wrapper>
        <FormControl
          as="textarea"
          rows={3}
          style={{ resize: "none" }}
          value={text}
          placeholder="Введите текст уведомления"
          onChange={handleChange}
        />
        <ClearIconButton onClick={() => dispatch(store.clearText())} />
      </Wrapper>
    </FormControlWrapper>
  );
};
