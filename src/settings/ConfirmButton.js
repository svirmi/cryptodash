import React from "react";
import styled from "styled-components";
import {AppContext} from "../context/AppProvider";
import {fontSize1, greenBoxShadow, color2, color3} from "../shared/Styles";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    padding: 7px;
    color: ${color3};
    ${fontSize1}
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }
`;

export const CenterDiv = styled.div`
    display:grid;
    justify-content: center;
`;

export default function () {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) =>
                <CenterDiv>
                    <ConfirmButtonStyled onClick={confirmFavorites}>
                        Confirm Favorites
                    </ConfirmButtonStyled>
                </CenterDiv>
            }
        </AppContext.Consumer>
    )
}
