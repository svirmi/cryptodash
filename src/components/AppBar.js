import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    display:grid;
    grid-template-columns: 180px 100px 100px;
`;

export default function () {
    return  <Bar>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Bar>
}