import React from "react";
import Page from "../shared/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";

export default function () {
    return <Page name="dashboard">
        <PriceGrid/>
        <CoinSpotlight/>
    </Page>
}