import React, {Component} from "react";
import "../styles/App.css";
import {AppProvider} from "../context/AppProvider";
import AppLayout from "../layout/AppLayout";
import Settings from "../settings";
import AppBar from "../components/AppBar";
import Content from "../shared/Content";

class App  extends Component{
    render() {
        return (
            <AppLayout>
                <AppProvider>
                    <AppBar/>
                    <Content>
                        <Settings/>
                    </Content>
                </AppProvider>
            </AppLayout>
            );
    }
}

export default App;
