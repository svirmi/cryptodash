import React from "react";
import styled, {css} from "styled-components";
import {AppContext} from '../context/AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`;

const Bar = styled.div`
    display:grid;
    grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 15px #03ff03;
    `}
    ${props => props.hidden && css`
        display:none;
    `}
`;

function ControlButton({name}) {
    return (
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <ControlButtonElem
                    active={page === name}
                    onClick={() => setPage(name)}
                    hidden={firstVisit && name === 'dashboard'}
                >
                    {toProperCase(name)}
                </ControlButtonElem>
            )}
        </AppContext.Consumer>
    );
}

function toProperCase(el) {
    return el.charAt(0).toUpperCase() + el.substr(1);
}

export default function () {
    return (
        <Bar>
            <Logo>CryptoDash</Logo>
            <div></div>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
        </Bar>
    );
}