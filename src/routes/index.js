import React, { Component } from 'react';
import { Switch, withRouter, Route } from "react-router-dom";
import {Home } from "Features";
import AuthRoutes from "./withAuth";
import { isAuthenticated, getAccessToken, getRefreshToken } from "commons/authCookies";

class IndexRouter extends Component {
   render() {
      return (
         <Switch>
            {/* <AuthRoutes path="/login" exact component={Login} /> */}
            <Route path="/" exact component={Home} />
         </Switch>
      );
   }
}

export default withRouter(IndexRouter);