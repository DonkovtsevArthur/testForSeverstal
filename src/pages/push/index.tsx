import React from "react";
import { TabPanel } from "react-tabs";
import styled from "styled-components";
import { GlobalAds } from "pages/main/ui/global-ads";
import { Tab, TabList, Tabs } from "ui/tabs";
import { Container } from "ui/container";
import { device } from "theme/respond";

const TabListWrapper = styled.div`
  padding: 23px 10px 23px 10px;
  @media ${device.tablet} {
    padding: 43px 30px 43px 30px;
  }
  @media ${device.desktop} {
    padding: 43px 0 43px 50px;
  }
`;

const PushContainer = styled(Container)`
  padding: 0;
`;

const tabs = [
  { title: "Глобальные объявления", Component: () => <GlobalAds /> },
  { title: "Отправить на группу", Component: () => <h2>Отправить на группу</h2> },
  { title: "Контент-уведомления", Component: () => <h2>Контент-уведомления</h2> },
];

export const Push = () => {
  return (
    <PushContainer>
      <Tabs>
        <TabList>
          {tabs.map(({ title }) => (
            <Tab key={title}>{title}</Tab>
          ))}
        </TabList>
        {tabs.map(({ title, Component }) => (
          <TabPanel key={title}>
            <TabListWrapper>
              <Component />
            </TabListWrapper>
          </TabPanel>
        ))}
      </Tabs>
    </PushContainer>
  );
};
