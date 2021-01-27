import React, {Suspense} from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import FriendsContainer from "./components/Friends/FriendsContainer";
import {withSuspense} from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    } else {
      return (
        <div className="root">
          <HeaderContainer/>
          <section className="main">
            <Navbar/>
            <Route path="/Dialogs"
                   render={ withSuspense( DialogsContainer) }/>
            <Route path="/profile/:userId?"
                   render={ withSuspense( ProfileContainer) }/>
            <Route path="/Friends"
                   render={() => <FriendsContainer/>}/>
            <Route path="/Login"
                   render={() => <LoginPage/>}/>
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
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
const NetWork = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  )
}
export default NetWork;
// export default compose(
//   withRouter,
//   connect(mapStateToProps, {initializeApp}))(App);

