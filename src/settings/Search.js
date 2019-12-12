import React from "react";
import styled from "styled-components";
import {backgroundColor2, fontSize2} from "../shared/Styles";
import {AppContext} from "../context/AppProvider";
import _ from 'lodash';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1px solid;
    height: 2.5rem;
    color: #1163c9;
    place-self: center left;
`;

// handleFilter
const handleInput = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // get all the coin symbols
    let coinSymbols = Object.keys(coinList);

    // get all the coin names and map symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);

    // combining symbols and their names to search
    let allStringsToSearch = coinSymbols.concat(coinNames);
    console.log(allStringsToSearch);
}, 500);

function filterCoins(e,setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    handleInput(inputValue, coinList, setFilteredCoins);
}

export default function () {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins,coinList }) =>
            <SearchGrid>
                <h2>Search all coins</h2>
                <SearchInput onKeyUp={(e) => filterCoins(e,setFilteredCoins, coinList)}/>
            </SearchGrid>
            }
        </AppContext.Consumer>
    )
}