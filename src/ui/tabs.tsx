import { Tabs as TabsDefault, TabList as TabListDefault, Tab as TabDefault } from "react-tabs";
import styled from "styled-components";

const Tabs = styled(TabsDefault)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blueWhite};
`;

const TabList = styled(TabListDefault)`
  display: flex;
  padding: 25px;
  padding-left: 50px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.blueSuperLight};
`;

const Tab = styled(TabDefault)`
  cursor: pointer;
  list-style: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blueLight};
  &:not(:last-child) {
    margin-right: 100px;
  }
  &.react-tabs__tab--selected {
    position: relative;
    color: ${({ theme }) => theme.colors.blue};

    &:after {
      content: "";
      position: absolute;
      width: 74px;
      height: 3px;
      bottom: -28px;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export { Tabs, Tab, TabList };
