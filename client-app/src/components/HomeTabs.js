import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "./Header";
import "../Tabs.css";
import AboutMe from "../components/AboutMe";
import Gallery from "./Gallery";
import Participants from "./Participants";

function HomeTabs() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Inicio</Tab>
          <Tab>Sobre el proyecto</Tab>
          <Tab>Participantes</Tab>
        </TabList>
        <TabPanel>
          <Header />
        </TabPanel>
        <TabPanel>
          <AboutMe />
        </TabPanel>
        <TabPanel>
          <Participants />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomeTabs;
