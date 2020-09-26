import React from "react";
import { ArrowUpIcon } from "ui/icons/arrow-up";

import { UserWrapper, UserName, UserAvatar, UserMenu } from "./styles";

export const UserInfo = () => {
  return (
    <UserWrapper>
      <UserName>Severstal\av.baruzdin</UserName>
      <UserAvatar />
      <UserMenu>
        <ArrowUpIcon />
      </UserMenu>
    </UserWrapper>
  );
};
