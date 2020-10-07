import React from "react";
import  {BrowserRouter, Route} from "react-router-dom"

import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
    <div className="root">
      <Header />
      <section className="main">
        <Navbar />
        <Route path = "/Dialogs" component={Dialogs}/>
        <Route  path = "/Content" component={Content}/>
        <Route  path = "/News" component={News}/>
        <Route  path = "/Music" component={Music}/>
        <Route  path = "/Settings" component={Settings}/>
        {/* <Content /> */}
        {/* <Messages /> */}
        <Friends />
     
      </section>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
