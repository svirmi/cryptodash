import React from "react";
import {AppContext} from "../context/AppProvider";
import {SelectableTile, DeletableTile} from "../shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection ?
        () => {removeCoin(coinKey)} :
        () => {addCoin(coinKey)}
}

export default function ({coinKey, topSection}) {
    return <AppContext.Consumer>
        {({coinList, addCoin, removeCoin}) => {

            let coin = coinList[coinKey];
            let TileClass = SelectableTile;

            if(topSection) {
                TileClass = DeletableTile;
            }

            return <TileClass onClick = {clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
                <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection} />
                <CoinImage coin={coin}/>
            </TileClass>
        }}
    </AppContext.Consumer>
}