import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import HomeTabs from "./components/HomeTabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="app">
        <header className="app-header"></header>
        <Banner />
        <HomeTabs />
      </div>
      <div className="icons-List">
        <Footer />
      </div>
    </div>
  );
}

export default App;
