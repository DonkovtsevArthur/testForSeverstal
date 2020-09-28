import { TabList as TabListDefault, Tab as TabDefault } from "react-tabs";

import styled from "styled-components";
import { device } from "theme/respond";

export const TabList = styled(TabListDefault)`
  display: flex;
  justify-content: space-around;
  padding: 25px 10px 25px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.blueSuperLight};

  @media ${device.tablet} {
    justify-content: flex-start;
    padding: 25px 0 25px 35px;
  }

  @media ${device.desktop} {
    padding: 25px 0 25px 50px;
  }
`;

export const Tab = styled(TabDefault)`
  cursor: pointer;
  list-style: none;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blueLight};
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
    font-size: 16px;
  }

  &:not(:last-child) {
    margin-right: 0;

    @media ${device.tablet} {
      font-size: 18px;
      margin-right: 17px;
    }
    @media ${device.desktop} {
      margin-right: 100px;
    }
  }

  &.react-tabs__tab--selected {
    position: relative;
    color: ${({ theme }) => theme.colors.blue};

    &:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 3px;
      bottom: -28px;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: ${({ theme }) => theme.colors.blue};

      @media ${device.tablet} {
        width: 74px;
      }
    }
  }
`;

export { Tabs } from "react-tabs";
