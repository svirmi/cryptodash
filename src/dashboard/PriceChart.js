import React from "react";
import HighchartsReact from 'highcharts-react-official';
import Options from "./HighChartsConfig"
import Highcharts from 'highcharts';
import {AppContext} from "../context/AppProvider";
import {Tile} from "../shared/Tile";

export default function () {

    return (
        <AppContext.Consumer>
            {({historical}) =>
                <Tile>
                    {
                        historical ?
                            <HighchartsReact highcharts={Highcharts} options={Options(historical)} /> :
                            <div>Loading data ..</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}

