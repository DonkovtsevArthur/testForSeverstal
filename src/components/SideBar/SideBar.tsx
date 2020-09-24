import React from "react";
import AnalystIcon from "ui/icons/AnalystIcon";
import PushIcon from "ui/icons/PushIcon";
import { getIsActive } from "./helpers";
import { SideBarLink, SideBarWrapper } from "./styles";
import { SideBarType } from "./types";

const sidebar: SideBarType[] = [
  { title: "Аналитика", code: "", Icon: AnalystIcon },
  { title: "Уведомления", code: "push", Icon: PushIcon },
];

const SideBar = () => {
  return (
    <SideBarWrapper>
      {sidebar.map(({ title, Icon, code }) => (
        <SideBarLink to={`/${code}`} key={title} isActive={getIsActive(code)}>
          <Icon />
          {title}
        </SideBarLink>
      ))}
    </SideBarWrapper>
  );
};

export default SideBar;
