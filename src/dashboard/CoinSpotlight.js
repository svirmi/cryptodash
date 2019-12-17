import React from "react";
import styled from "styled-components";
import {Tile} from "../shared/Tile";
import {AppContext} from "../context/AppProvider";
import CoinImage from "../shared/CoinImage";

const SpotLightName = styled.h2`
    text-align: center;
`;


export default function () {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
                <Tile>
                    <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
                    <CoinImage coin={coinList[currentFavorite]}/>
                </Tile>
            }
        </AppContext.Consumer>
    )
}