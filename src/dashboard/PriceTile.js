import React from "react";
import styled, {css} from "styled-components";
import {SelectableTile} from "../shared/Tile";
import {CURRENCY} from "../context/AppProvider";
import {fontSize3} from "../shared/Styles";
import {CoinHeaderGridStyled} from "../settings/CoinHeaderGrid";

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        ${fontSize3}
    `}
`;

function PriceTile({sym, data}) {
    return (
        <PriceTileStyled>
            <CoinHeaderGridStyled>
                <div>{sym}</div>
                <div>{data.CHANGEPCT24HOUR}</div> // change percents 24 hrs
            </CoinHeaderGridStyled>
        </PriceTileStyled>
    );
}

export default function ({price, index}) {
    let sym = Object.keys(price)[0];
    let data = price[sym][CURRENCY];

    return (
        <PriceTile sym={sym} data={data}>
            {sym} {data.PRICE}
        </PriceTile>
    )
}