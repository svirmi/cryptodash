import React from "react";
import _ from "lodash";
import moment from "moment";

const apiKey = process.env.API_KEY;

const cc = require("cryptocompare");

cc.setApiKey(apiKey);

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;
const DEFAULT_FAVORITES = ['BTC', 'ETH', 'XMR', 'DOGE', 'BUZZ'];

export const CURRENCY = 'USD';
export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 'settings',
            favorites: DEFAULT_FAVORITES,
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin : this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins,
            setCurrentFavorite: this.setCurrentFavorite,
        }
    }

    componentDidMount() {
        this.fetchCoins();
        this.fetchPrices();
        this.fetchHistorical();
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

    fetchHistorical = async () => {
        if(this.state.firstVisit) return;
        let results = await this.historical();
        let historical = [
            {
                name: this.state.currentFavorite,
                data: results.map((ticker, index) => [
                    moment().subtract({months: TIME_UNITS - index}).valueOf(),
                    ticker.USD
                ])
            }
        ];
        this.setState({historical});
    }

    historical = () => {
        let promises = [];
        for (let units = TIME_UNITS; units > 0; units--) {
            promises.push(
                cc.priceHistorical(
                    this.state.currentFavorite,
                    [CURRENCY],
                    moment().subtract({months: units}).toDate()
                )
            );
        }
        return Promise.all(promises);
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
        let currentFavorite = this.state.favorites[0];
        this.setState({
            firstVisit: false,
            page: 'dashboard',
            currentFavorite,
            prices: null,
            historical:null
        }, () => {
            this.fetchPrices();
            this.fetchHistorical();
        });

        localStorage.setItem("cryptodash", JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite
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
        if(typeof window !== 'undefined') {  // gatsby build SSR hack
            let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"));
            if(!cryptoDashData){
                return {
                    page: "settings",
                    firstVisit: true
                }
            }

            let {favorites, currentFavorite} = cryptoDashData;

            return {favorites, currentFavorite};
        }
    }

    setCurrentFavorite = (sym) => {
        this.setState({
            currentFavorite: sym,
            historical: null
        }, this.fetchHistorical);
        localStorage.setItem('cryptodash', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptodash')),
            currentFavorite: sym
        }))
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
