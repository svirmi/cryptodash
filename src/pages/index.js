import React, {Component} from "react";
import "../styles/App.css";
import {AppProvider} from '../context/AppProvider';
import Welcome from "../components/WelcomeMessage";
import AppLayout from "../layout/AppLayout";
import AppBar from "../components/AppBar";

class App  extends Component{
    render() {
        return (
            <AppLayout>
                <AppProvider>
                    <AppBar/>
                    <Welcome name="CryptoDash"/>
                </AppProvider>
            </AppLayout>
            );
    }
}

export default App;
