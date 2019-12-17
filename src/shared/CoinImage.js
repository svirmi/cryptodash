import React from "react";
import styled from "styled-components";

const CoinImage = styled.img`
    height: 50px;
`;

export default function ({coin, style}) {
    return <CoinImage
        alt={coin.CoinSymbol}
        src={`https://cryptocompare.com${
            coin.ImageUrl
        }`}
    />;
}