import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BarChart extends Component {
    render() {
        return(
        <div>
            <Plot
                data={[
                    {type: 'bar',
                x: ['one','two','three','four','five','six'],
                y: [15,19,45,48,34,24]}
                ]}
            layout={ { height: 400,
                title: 'A simple bar chart',
                plot_bgcolor: 'rgb(224, 224, 224)',
                paper_bgcolor: 'rgb(224, 224, 224' } }
                useResizeHandler={true}
            style={{width: '100%'}}
            />
        </div>
        )
    }
}

export default BarChart;