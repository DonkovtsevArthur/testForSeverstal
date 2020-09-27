import { getErrorFormSelector } from "features/form/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControlWrapper, Label, Wrapper } from "ui";
import { ClearIconButton } from "ui/clear-icon-button";
import { FormControl } from "ui/form-control";

import { store } from "../store";

export const Title = () => {
  const dispatch = useDispatch();
  const { value, error } = useSelector(store.selector);
  const errorFromForm = useSelector(getErrorFormSelector);
  useEffect(() => {
    if (!value && errorFromForm) {
      dispatch(store.setError("Пустое поле"));
    }
  }, [errorFromForm, value, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(store.changeText(e.target.value));
  };

  return (
    <FormControlWrapper>
      <Label>Название уведомления</Label>
      <Wrapper textError={error}>
        <FormControl textError={error} value={value} placeholder="Введите текст уведомления" onChange={handleChange} />
        <ClearIconButton onClick={() => dispatch(store.clearText())} />
      </Wrapper>
    </FormControlWrapper>
  );
};
