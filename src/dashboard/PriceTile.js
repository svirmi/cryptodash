import React from "react";
import styled, {css} from "styled-components";
import {SelectableTile} from "../shared/Tile";
import {CURRENCY} from "../context/AppProvider";

export default function ({price, index}) {
    let sym = Object.keys(price)[0];
    let data = price[sym][CURRENCY];

    return <SelectableTile>{sym} {data.PRICE}</SelectableTile>
}