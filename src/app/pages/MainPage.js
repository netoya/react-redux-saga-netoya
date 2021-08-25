import React from "react";
import RootRoute from "../../roots/rootRoutes";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainPage() {
    return (
        <div className={"h-full flex flex-col"}>
            <Header></Header>
            <div className={"flex-grow bg-white"}>
                <RootRoute></RootRoute>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;
