import { GlobalAds } from "components/global-ads";
import React, { useMemo } from "react";
import { TabPanel } from "react-tabs";
import styled from "styled-components";
import { Tab, TabList, Tabs } from "ui/tabs";

const TabListWrapper = styled.div`
  padding: 43px 50px;
`;

const tabs = [
  { title: "Глобальные объявления", Component: () => <GlobalAds /> },
  { title: "Отправить на группу", Component: () => <h2>Отправить на группу</h2> },
  { title: "Контент-уведомления", Component: () => <h2>Контент-уведомления</h2> },
];

export const Push = () => {
  const renderTabs = useMemo(() => tabs.map(({ title }) => <Tab key={title}>{title}</Tab>), []);
  const renderTabPanels = useMemo(
    () =>
      tabs.map(({ title, Component }) => (
        <TabPanel key={title}>
          <TabListWrapper>
            <Component />
          </TabListWrapper>
        </TabPanel>
      )),
    [],
  );
  return (
    <Tabs>
      <TabList>{renderTabs}</TabList>
      {renderTabPanels}
    </Tabs>
  );
};
