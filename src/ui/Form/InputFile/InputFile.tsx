import React from "react";
import OverviewIcon from "ui/icons/OverviewIcon";

import { Label } from "..";
import { FormWrapperElementFile, HelperText, InputValueFile } from "./styles";

type InputFileType = {
  label: string;
};

const InputFile: React.FC<InputFileType> = ({ label = "" }) => {
  return (
    <FormWrapperElementFile>
      <InputValueFile id="file" type="file" />
      <Label htmlFor="file">
        <OverviewIcon />
        {label}
      </Label>
      <HelperText>
        <p> Значок в высоком разрешении</p>
        <p>512х512 px; 32-разрядный PGN</p>
      </HelperText>
    </FormWrapperElementFile>
  );
};

export default InputFile;
