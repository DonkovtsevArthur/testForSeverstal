import Analyst from "pages/analyst";
import Push from "pages/push";
import React from "react";
import { AnalystIcon } from "ui/icons/analyst";
import { PushIcon } from "ui/icons/push";
import { getIsActive } from "./helpers";
import { SideBarLink, SideBarWrapper } from "./styles";
import { SideBarType } from "./types";


export const sidebar: SideBarType[] = [
  { title: "Аналитика", code: "", Icon: AnalystIcon, Component: Analyst },
  { title: "Уведомления", code: "push", Icon: PushIcon, Component: Push },
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
