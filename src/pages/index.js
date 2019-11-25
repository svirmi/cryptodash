import React, {Component} from "react"
import Welcome from "../components/WelcomeMessage";
import styled from "styled-components";

const MyDiv = styled.div`
    color: green;
`;

class App  extends Component{
    render() {
        return (
            <div>
                <Welcome name="CryptoDash"/>
                <MyDiv>OMG, it's styled component!</MyDiv>
            </div>
            )
    }
}

export default App;
