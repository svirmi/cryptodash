import React from "react";
import {AppContext} from "../context/AppProvider";

export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ?
                    <div>Welcome to CryptoDash! Please selct your favorite coins:</div> :
                    null
            }
        </AppContext.Consumer>
    );
}