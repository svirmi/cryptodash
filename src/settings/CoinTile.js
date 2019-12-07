import React from "react";
import {AppContext} from "../context/AppProvider";
import {SelectableTile} from "../shared/Tile";


export default function ({coinKey}) {
    return <AppContext.Consumer>
        {({coinList}) => {
            let coin = coinList[coinKey];
            const TileClass = SelectableTile;
            return <TileClass>{coinKey}</TileClass>
        }}
    </AppContext.Consumer>
}