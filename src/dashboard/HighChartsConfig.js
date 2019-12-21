const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Coin price'
    },
    yAxis: {
        title: {
            text: 'Price'
        }
    },
    series: [
        {
            name: 'Price',
            data: [1, 2, 1, 4, 3, 6]
        }
    ]
};

export default options;