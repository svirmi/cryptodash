import React from "react";
import _ from "lodash";

const cc = require("cryptocompare");

const MAX_FAVORITES = 10;
const DEFAULT_FAVORITES = ['BTC', 'ETH', 'XMR', 'DOGE', 'BUZZ'];
const CURRENCY = 'USD';

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
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins
        }
    }

    componentDidMount() {
        this.fetchCoins();
        this.fetchPrices();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    fetchPrices = async () => {
        if(this.state.firstVisit) return;
        let prices = await this.prices();
        prices = prices.filter(price => Object.keys(price).length);
        this.setState({prices});
    }

    prices = async () => {
        let returnData = [];

        for(let i = 0; i < this.state.favorites.length; i++) {
            try {
                let priceSata = await cc.priceFull(this.state.favorites[i], CURRENCY);
                returnData.push(priceSata);
            } catch (e) {
                console.warn('Fetch price error: ', e);
            }
        }

        return returnData;
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        }, () => {
            this.fetchPrices();
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

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
