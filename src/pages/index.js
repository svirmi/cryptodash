import React, {Component} from "react";
import "../styles/App.css";
import Welcome from "../components/WelcomeMessage";
import AppLayout from "../layout/AppLayout";
import AppBar from "../components/AppBar";

class App  extends Component{
    render() {
        return (
            <AppLayout>
                <AppBar/>
                <Welcome name="CryptoDash"/>
            </AppLayout>
            )
    }
}

export default App;
