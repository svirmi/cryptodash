import React from "react";
import {AppContext} from "../context/AppProvider";

export default function (props) {
    return <AppContext.Consumer>
        {({coinList, prices, firstVisit}) => {

            if(!coinList){
                return <div>Loading coins ...</div>
            }

            if(!firstVisit && !prices) {
                return <div>Loading prices ...</div>
            }

            return <div>{props.children}</div>
        }}
    </AppContext.Consumer>
}