import React from "react";
import styled, {css} from "styled-components";
import {SelectableTile} from "../shared/Tile";
import {CURRENCY} from "../context/AppProvider";
import {fontSize3, fontSizeBig} from "../shared/Styles";
import {CoinHeaderGridStyled} from "../settings/CoinHeaderGrid";

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        ${fontSize3}
    `}
`;

const JustifyRight = styled.div`
    justify-self: right;
`;

const TickerPrice = styled.div`
    ${fontSizeBig};
`;

const ChangePct = styled.div`
    color: green;
    ${props => props.isRed && css`
        color: red;
    `}
`;

const numberFormat = number => {
    return +(number + '').slice(0,7);
};

function ChangePercent({data}) {
    return (
        <JustifyRight>
            {/* change percentage within 24 hrs */}
            <ChangePct isRed={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
        </JustifyRight>
    );
}

function PriceTile({sym, data}) {
    return (
        <PriceTileStyled>
            <CoinHeaderGridStyled>
                <div>{sym}</div>
                <ChangePercent data={data}/>
            </CoinHeaderGridStyled>
            <TickerPrice>
                {CURRENCY === 'USD' ? '$' : ''} {numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceTileStyled>
    );
}

export default function ({price}) {

    let sym = Object.keys(price)[0];
    let data = price[sym][CURRENCY];

    return (
        <PriceTile sym={sym} data={data}/>
    )
}