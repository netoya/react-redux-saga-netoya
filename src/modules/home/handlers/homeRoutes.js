import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";

export const HomeRoutes = ({ path }) => (
    <Route
        path={path}
        render={({ match: { url } }) => (
            <Switch>
                <Route path={`${url}/`} component={HomePage} exact />
                <Route component={() => <div>Not found home</div>} />
            </Switch>
        )}
    />
);
