import React from "react";
import "./index.css";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {

    return(
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitsList/>
        </>

    );

};
export default HomeComponent;