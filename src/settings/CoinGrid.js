import React from "react";
import styled from "styled-components";
import {AppContext} from "../context/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 15px;
    margin: 30px auto;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
    return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
}

function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
    return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}

export default function ({topSection}) {
    return (
    <AppContext.Consumer>
        {({coinList, favorites, filteredCoins}) => (
            <CoinGridStyled>
                {
                    getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey =>
                        <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection}/>)
                }
            </CoinGridStyled>
        )}
    </AppContext.Consumer>)
}