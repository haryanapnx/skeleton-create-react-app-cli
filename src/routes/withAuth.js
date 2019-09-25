import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated, getAccessToken } from "../commons/authCookies";

const AuthRoutes = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated() ? (
					<Component {...props} token={getAccessToken()} />
				) : (
						<Redirect
							to={{
								pathname: "/",
								state: { from: props.location },
							}}
						/>
					)
			}
		/>
	)
};

export default AuthRoutes;