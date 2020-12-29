import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
  return (
    <div className="root">
      <HeaderContainer/>
      <section className="main">
        <Navbar/>
        <Route path="/Dialogs"
               render={() => <DialogsContainer/>}/>
        <Route path="/profile/:userId?"
               render={() => <ProfileContainer/>}/>
        <Route path="/Friends"
               render={() => <FriendsContainer/>}/>
        <Route path="/News"
               render={() => <News/>}/>
        <Route path="/Music"
               render={() => <Music/>}/>
        <Route path="/Settings"
               render={() => <Settings/>}/>
        {/*<Friends/>*/}

      </section>
      <Footer/>
    </div>
  );
}

export default App;
