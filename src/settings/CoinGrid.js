import React from "react";
import styled, {css} from "styled-components";
import {AppContext} from "../context/AppProvider";
import {SelectableTile} from "../shared/Tile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 15px;
`;

export default function () {
    return <AppContext.Consumer>
        {({coinList}) => <CoinGridStyled>
            {Object.keys(coinList).map(coinKey =>
            <SelectableTile key={coinKey}>{coinKey}</SelectableTile>)
            }
        </CoinGridStyled>
        }
    </AppContext.Consumer>
}