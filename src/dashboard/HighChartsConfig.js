import HighChartsTheme from "./HighChartsTheme";

export default function (historical) {

    const series = {
        series: historical
    };

    return {...series, ...HighChartsTheme,};
}
