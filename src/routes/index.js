import React, { Component } from 'react';
import { Switch, withRouter, Route } from "react-router-dom";
import {
   /* PLOP_INJECT_IMPORT */
   ForgotAkun,
   ForgotPassword,
} from "Features";
import AuthRoutes from "./withAuth";
import { isAuthenticated, getAccessToken, getRefreshToken } from "commons/authCookies";

class IndexRouter extends Component {
   render() {
      return (
         <Switch>
            {/* ROUTE_INJECT_EXPORT */}
            <Route path="/forgot-akun" exact component={ForgotAkun} />
            <AuthRoutes path="/forgot-password" exact component={ForgotPassword} />
         </Switch>
      );
   }
}

export default withRouter(IndexRouter);