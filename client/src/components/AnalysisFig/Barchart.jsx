import React from 'react';
//import radium from 'radium';
//import * as d3 from 'd3';
const echarts = require('echarts/lib/echarts');

//require echarts component
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/chart/bar');

const barStyle = {
    left: '30%',
    top: '100px',
    width: '600px',
    height: '400px'
}

//a bar chart component
class Barchart extends React.Component{
    constructor(props) {
        super(props);
        this.drawChart = this.drawChart.bind(this);
    }
    //function to call when component mounted
    componentDidMount() {
        this.drawChart();
    }

    drawChart = function() {
        let myChart = echarts.init(document.querySelector('.chartdiv'));
        const name = this.props.name;
        const xdata = this.props.xdata;
        const ydata = this.props.ydata;
        myChart.setOption({
            title: {
                text: name
            },
            tooltip: {},
            xAxis: {
                data: xdata
            },
            yAxis: {},
            series: [{
                name: 'time',
                type: 'bar',
                data: ydata
            }]
        })
    }

    //function to draw the chart
    // drawChart = function() {
    //     const data = this.props.data;
    //     const svg = d3.select(".chartdiv")
    //                     .append("svg")
    //                     .attr("width", this.state.width)
    //                     .attr("height", this.state.height);
    //                     //.style('margin-left', 100);
                        
    //     svg.selectAll('rect')
    //         .data(data)
    //         .enter()
    //         .append('rect')
    //         .attr('x', (d, i) => i * 70)
    //         .attr('y', (d, i) => 300 - d * 10)
    //         .style('width', 25)
    //         .style('height', (d, i) => d * 10)
    //         .attr('fill', 'blue');
    // }

    render() {
        return (
            <div className="chartdiv" style={barStyle}>
            </div>
        )
    }
}

export default Barchart;