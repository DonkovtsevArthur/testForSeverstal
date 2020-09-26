import React, { memo } from "react";
import OverviewIcon from "ui/icons/OverviewIcon";

import { Label } from "..";
import { FormWrapperElementFile, HelperText, InputValueFile } from "./styles";

type InputFileType = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFile: React.FC<InputFileType> = ({ label = "", onChange = () => {} }) => {
  return (
    <FormWrapperElementFile>
      <InputValueFile id="file" type="file" accept=".png" onChange={onChange} />
      <Label htmlFor="file">
        <OverviewIcon />
        {label}
      </Label>
      <HelperText>
        <p> Значок в высоком разрешении</p>
        <p>512х512 px; 32-разрядный PNG</p>
      </HelperText>
    </FormWrapperElementFile>
  );
};

export default memo(InputFile);
