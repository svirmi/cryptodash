import React, {Component} from "react";
import "../styles/App.css";
import Welcome from "../components/WelcomeMessage";
import Layout from "../layout/Layout";

class App  extends Component{
    render() {
        return (
            <Layout>
                <Welcome name="CryptoDash"/>
            </Layout>
            )
    }
}

export default App;
