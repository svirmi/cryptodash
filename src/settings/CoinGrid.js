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

function getCoinsToDisplay(coinList, topSection, favorites) {
    return topSection ? favorites : Object.keys(coinList).slice(0,topSection ? 10 : 100);
}

export default function ({topSection}) {
    return <AppContext.Consumer>
        {({coinList, favorites}) =>
            <CoinGridStyled>
                {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey =>
                    <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection}/>
                )}
            </CoinGridStyled>
        }
    </AppContext.Consumer>
}