import React from "react";
import styled from "styled-components";
import {AppContext} from "../context/AppProvider";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 15px;
    margin: 30px auto;
`;

export default function () {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map((price, index) => <PriceTile key={index} index={index} price={price} />)}
                </PriceGrid>
            )}
        </AppContext.Consumer>
    )
}