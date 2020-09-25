import Form from "components/Form";
import React, { useMemo } from "react";
import { TabPanel } from "react-tabs";
import { Tab, TabList, Tabs } from "ui/tabs";
import { TabListWrapper } from "./styles";

const tabs = [
  { title: "Глобальные объявления", Component: () => <Form /> },
  { title: "Отправить на группу", Component: () => <h2>Отправить на группу</h2> },
  { title: "Контент-уведомления", Component: () => <h2>Контент-уведомления</h2> },
];

const Push = () => {
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

export default Push;
