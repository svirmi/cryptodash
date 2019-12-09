import React from "react";
import _ from "lodash";

const cc = require("cryptocompare");

const MAX_FAVORITES = 10;
const DEFAULT_FAVORITES = ['BTC', 'ETH', 'XMR', 'DOGE'];

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: DEFAULT_FAVORITES,
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin : this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
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
            favorites: this.state.favorites
        }));
    }

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES) {
          favorites.push(key);
          this.setState({favorites});
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)});
    }

    isInFavorites = key => _.includes(this.state.favorites, key);

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"));

        if(!cryptoDashData){
            return {
                page: "settings",
                firstVisit: true
            }
        }

        let {favorites} = cryptoDashData;

        return {favorites};
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
