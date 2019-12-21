import React from "react";
import HighchartsReact from 'highcharts-react-official';
import Options from "./HighChartsConfig"
import Highcharts from 'highcharts';
import {AppContext} from "../context/AppProvider";
import {Tile} from "../shared/Tile";
import HighChartsTheme from "./HighChartsTheme";

export default function () {

    const MergedOptions = {...HighChartsTheme, ...Options(historical)};

    return (
        <AppContext.Consumer>
            {({historical}) =>
                <Tile>
                    {
                        historical ?
                            <HighchartsReact highcharts={Highcharts} options={MergedOptions} /> :
                            <div>Loading data ..</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}

