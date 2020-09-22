import React from "react";

import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Friends from "./components/Friends";
import Header from "./components/Header";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div className="root">
      <Header />

      <section className="main">
        <MainNav />
        <Content />
        <Friends />
      </section>
      <Footer />
    </div>
  );
}

export default App;
