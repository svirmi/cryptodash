import React from "react";
import styled from "styled-components";
import {DeletableTile} from "../shared/Tile";

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;        
    }
`;

export const CoinHeaderGridStyled = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
    justify-self: right;
`;

export default function ({name, symbol, topSection}) {
    return <CoinHeaderGridStyled>
        <div>{name}</div>
        {
            topSection ?
                (<DeleteIcon>&#10006;</DeleteIcon>) :
                (<CoinSymbol>{symbol}</CoinSymbol>)
        }
    </CoinHeaderGridStyled>
}