import React from "react";
import styled, {css} from "styled-components";
import {SelectableTile} from "../shared/Tile";
import {CURRENCY} from "../context/AppProvider";
import {fontSize3, fontSizeBig, greenBoxShadow} from "../shared/Styles";
import {CoinHeaderGridStyled} from "../settings/CoinHeaderGrid";
import {AppContext} from "../context/AppProvider";

const PriceTileStyled = styled(SelectableTile)`
    
    ${props => props.compact && css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        justify-items: right;
        ${fontSize3}        
    `}
    
    ${props => props.currentFavorite && css`
        ${greenBoxShadow}
        pointer-events:none;
    `}
`;

const JustifyRight = styled.div`
    justify-self: right;
`;

const JustifyLeft = styled.div`
    justify-self: left;
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

function PriceTileCompact({sym, data, compact, currentFavorite}) {
    return (
        <PriceTileStyled compact currentFavorite={currentFavorite}>
                <JustifyLeft>{sym}</JustifyLeft>
                <ChangePercent data={data}/>
            <div>
                {CURRENCY === 'USD' ? '$' : ''} {numberFormat(data.PRICE)}
            </div>
        </PriceTileStyled>
    );
}

function PriceTile({sym, data, currentFavorite}) {
    return (
        <PriceTileStyled currentFavorite={currentFavorite}>
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

export default function ({price, index}) {

    let sym = Object.keys(price)[0];
    let data = price[sym][CURRENCY];
    let TileClass = index < 5 ? PriceTile : PriceTileCompact;

    return (
        <AppContext.Consumer>
            {
                ({currentFavorite}) =>
                    <TileClass
                        sym={sym}
                        data={data}
                        currentFavorite={currentFavorite === sym}
                    />
            }
        </AppContext.Consumer>
    )
}