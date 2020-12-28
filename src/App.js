import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import "./App.css";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


function App(props) {
  return (
    <div className="root">
      <Header/>
      <section className="main">
        <Navbar/>
        <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
        <Route path="/Profile" render={() => <Profile/>}/>
        <Route path="/Friends" render={() => <FriendsContainer/>}/>
        <Route path="/News" render={() => <News/>}/>
        <Route path="/Music" render={() => <Music/>}/>
        <Route path="/Settings" render={() => <Settings/>}/>
        {/*<Friends/>*/}

      </section>
      <Footer/>
    </div>
  );
}

export default App;
