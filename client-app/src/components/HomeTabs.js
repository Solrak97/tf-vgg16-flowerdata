import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Home from "./Home";
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
          <Tab>¿Cómo funciona?</Tab>
          <Tab>Participantes</Tab>
        </TabList>
        <TabPanel>
          <Home />
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
