import React from "react";
import styled from "styled-components";
import {AppContext} from "../context/AppProvider";

const PriceGrid = styled.div`
    display: grid;
`;

export default function () {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map(price => <div>Price</div>)}
                </PriceGrid>
            )}
        </AppContext.Consumer>
    )
}