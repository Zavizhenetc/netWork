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



function App(props) {
  return (
    <BrowserRouter>
    <div className="root">
      <Header />
      <section className="main">
        <Navbar />
        <Route path = "/Dialogs" render ={ ()=> <Dialogs  messages ={props.state.messages}  dialogs={props.state.dialogs} />}/>
        <Route  path = "/Content" render ={ () => <Content postsData={props.state.postsData}  />}/>
        <Route  path = "/News" render={()=> <News />}/>
        <Route  path = "/Music" render={ ()=> <Music />}/>
        <Route  path = "/Settings" render={ ()=> <Settings />}/>
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
