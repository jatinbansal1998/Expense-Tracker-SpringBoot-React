import React from "react";
import AppNav from "./AppNav";
import "./App.css"

class Home extends React.Component {
    render() {
        return (
            <div>
                <AppNav/>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h2>Welcome To Expense Tracker</h2>
                </div>
            </div>
        );
    }
}

export default Home;
