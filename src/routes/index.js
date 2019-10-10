import React, { Component } from 'react';
import { Switch, withRouter, Route } from "react-router-dom";
import {
  /* ROUTE_INJECT_IMPORT */
Auth,
Home,
 } from "Features";
import AuthRoutes from "./withAuth";
import { isAuthenticated, getAccessToken, getRefreshToken } from "commons/authCookies";

class IndexRouter extends Component {
   render() {
      return (
         <Switch>
           {/* ROUTE_INJECT_EXPORT */}
<Route path="/auth" exact component={ Auth } />
<Route path="/home" exact component={ Home } />
         </Switch>
      );
   }
}

export default withRouter(IndexRouter);