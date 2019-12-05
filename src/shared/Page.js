import React from "react";
import {AppContext} from "../context/AppProvider";

export default function ({name, children}) {
    return <AppContext.Consumer>
        {({page}) => {
            if (page !== name) {
                return null;
            }
            return <div>{children}</div>;
        }}
    </AppContext.Consumer>
}