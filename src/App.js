import React from "react";
import  {BrowserRouter, Route} from "react-router-dom"

import "./App.css";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



function App(props) {
  return (
    <div className="root">
      <Header />
      <section className="main">
        <Navbar />
        <Route path = "/Dialogs" render ={ ()=> <DialogsContainer  />}/>
        {/*<Route path = "/Dialogs" render ={ ()=> <DialogsContainer  store ={props.store}   />}/>*/}
        <Route  path = "/Profile" render ={ () => <Profile />}/>
        {/*<Route  path = "/Profile" render ={ () => <Profile store={props.store}  />}/> */}

        {/* <Route path = "/Dialogs" render ={ ()=> <Dialogs  store ={props.store} messages ={props.messagesPages.messages} dispatch={props.dispatch}  dialogs={props.state.messagesPages.dialogs} />}/> */}
        {/* <Route  path = "/Profile" render ={ () => <Profile contentPage={props.state.contentPage}  dispatch={props.dispatch} />}/> */}
        <Route  path = "/News" render={()=> <News />}/>
        <Route  path = "/Music" render={ ()=> <Music />}/>
        <Route  path = "/Settings" render={ ()=> <Settings />}/>
        <Friends />
     
      </section>
      <Footer />
    </div>
  );
}

export default App;
