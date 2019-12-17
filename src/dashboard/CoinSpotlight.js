import React from "react";
import {Tile} from "../shared/Tile";
import {AppContext} from "../context/AppProvider";
import CoinImage from "../shared/CoinImage";

export default function () {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
                <Tile>
                    <h2>{coinList[currentFavorite].CoinName}</h2>
                </Tile>
            }
        </AppContext.Consumer>
    )
}