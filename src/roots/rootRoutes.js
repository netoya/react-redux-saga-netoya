import React from "react";
import { Route, Switch } from "react-router";
import { HomeRoutes } from "../modules/home/handlers/homeRoutes";

function RootRoute() {
    return (
        <Switch>
            <HomeRoutes path={`/`}></HomeRoutes>
            <Route render={() => <div>Pagina no encontrada</div>} />
        </Switch>
    );
}

export default RootRoute;
