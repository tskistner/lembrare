import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

export default class Chart extends React.Component {

    render() {

        const data = this.props.data;
        const labelX = data.LABEL_X.map(x => {
            return { 'label': x };
        });

        const seriesValues = data.LABEL_Y.map((l, i) => {
            return {
                'seriesname': l.nm_categoria,
                'data': data.DATA[i].map(d => {
                    return { 'value': d };
                })
            };
        });

        const dataSource = {
            'chart': {
                'caption': this.props.title,
                'yaxisname': this.props.y_axis,
                'subcaption': this.props.subcaption,
                'showhovereffect': '1',
                'numbersuffix': '',
                'drawcrossline': '1',
                'plottooltext': this.props.description.concat(' $seriesName'),
                'theme': 'gammel'
            },
            'categories': [
                {
                    'category': labelX
                }
            ],
            'dataset': seriesValues
        };


        return <ReactFusioncharts
            type='msline'
            width='100%'
            height='100%'
            dataFormat='JSON'
            className='chart'
            dataSource={dataSource} />
    }

}