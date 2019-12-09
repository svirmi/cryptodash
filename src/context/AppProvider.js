import React from "react";

const cc = require("cryptocompare");

const MAX_FAVORITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin : this.addCoin,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount() {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });

        localStorage.setItem("cryptodash", JSON.stringify({
            test: "dasboard-test"
        }));
    }

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES) {
          favorites.push(key);
          this.setState({favorites});
        }
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
