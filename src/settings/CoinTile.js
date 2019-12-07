import React from "react";
import {AppContext} from "../context/AppProvider";
import {SelectableTile, DisabledTile, DeletableTile} from "../shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

export default function ({coinKey, topSection}) {
    return <AppContext.Consumer>
        {({coinList}) => {

            let coin = coinList[coinKey];
            let TileClass = SelectableTile;

            if(topSection) {
                TileClass = DeletableTile;
            }

            return <TileClass>
                <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection} />
                <CoinImage coin={coin}/>
            </TileClass>
        }}
    </AppContext.Consumer>
}