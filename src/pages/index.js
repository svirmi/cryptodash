import React, {Component} from "react"

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>

}

class App  extends Component{
    render() {
        return <Welcome name={"CryptoDash"}/>
    }
}

export default App;
