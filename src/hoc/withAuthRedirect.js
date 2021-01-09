import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

//делаем HOC редирект если не залогинен
export const withAuthRedirect = (Component) =>{
  class RedirectComponent extends React.Component {
    render(){
      if(!this.props.isAuth) return <Redirect to={"/Login"} />
      return <Component {...this.props} />
    }
  }

  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return connectedAuthRedirectComponent;
}