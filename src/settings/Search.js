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
    console.log(inputValue);
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