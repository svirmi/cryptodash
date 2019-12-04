import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    confirmFavorites(){
        console.log(1234);
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"));
        if(!cryptoDashData){
            return {
                page: "settings",
                firstVisit: true
            }
        }
        return {};
    }

    setPage = page => this.setState({page});

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
