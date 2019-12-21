import React from "react";
import options from "./HighChartsConfig"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {AppContext} from "../context/AppProvider";
import {Tile} from "../shared/Tile";
import HighChartsTheme from "./HighChartsTheme";

Highcharts.setOptions(HighChartsTheme);

export default function () {
    return (
        <AppContext.Consumer>
            {({historical}) =>
                <Tile>
                    {
                        historical ?
                            <HighchartsReact highcharts={Highcharts} options={options(historical)} /> :
                            <div>Loading data ..</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}

