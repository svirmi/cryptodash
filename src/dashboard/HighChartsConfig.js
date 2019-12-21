export default function (historical) {
    return {
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
        series: historical
    };
}
