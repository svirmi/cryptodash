import React from "react";
import options from "./HighChartsConfig"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {AppContext} from "../context/AppProvider";
import {Tile} from "../shared/Tile";


export default function () {
    return (
        <AppContext.Consumer>
            {() =>
                <Tile>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </Tile>
            }
        </AppContext.Consumer>
    )
}

