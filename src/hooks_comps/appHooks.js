import React from "react";
import Counter from "./counter";
import Toggle from "./toggle";
import AppDate from "./appDate";

export default function AppHooks() {
    return (
        <React.Fragment>
            
            <hr/>
            <AppDate/>
            <hr/>
            <Toggle/>
            <hr/>
            <Counter/>
        </React.Fragment>
    )
}