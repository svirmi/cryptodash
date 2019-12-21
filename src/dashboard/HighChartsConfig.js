import HighChartsTheme from "./HighChartsTheme";

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Coin price'
    },
    xAxis: {type: 'datetime'},
    yAxis: {
        title: {
            text: 'Price'
        }
    },

};

export default function (historical) {

    console.log(historical);

    const series = {
        series: historical
    };

    return { ...options, ...series, ...HighChartsTheme,};
}
