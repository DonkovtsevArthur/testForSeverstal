import React from "react";
import ArrowUpIcon from "ui/icons/ArrowUp";

import { UserWrapper, UserName, UserAvatar, UserMenu } from "./styles";

const UserLK = () => {
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

export default UserLK;