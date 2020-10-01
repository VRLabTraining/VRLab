


function generatePointCloudChart() {
    var trace1 = {
        type: "pointcloud",
        mode: "markers",
        marker: {
            sizemin: 0.5,
            sizemax: 100,
            arearatio: 0,
            color: "rgba(255, 0, 0, 0.6)"
        },
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        y: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    }

    var trace2 = {
        type: "pointcloud",
        mode: "markers",
        marker: {
            sizemin: 0.5,
            sizemax: 100,
            arearatio: 0,
            color: "rgba(0, 0, 255, 0.9)",
            opacity: 0.8,
            blend: true
        },
        opacity: 0.7,
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    var trace3 = {
        type: "pointcloud",
        mode: "markers",
        marker: {
            sizemin: 0.5,
            sizemax: 100,
            border: {
                color: "rgb(0, 0, 0)",
                arearatio: 0.7071
            },
            color: "green",
            opacity: 0.8,
            blend: true
        },
        opacity: 0.7,
        x: [3, 4.5, 6],
        y: [9, 9, 9]
    }

    var data = [trace1, trace2, trace3];

    var layout = {
        title: "Point Cloud",
        xaxis: {
            type: "linear",
            range: [
                -2.501411175139456,
                43.340777299865266],
            autorange: true
        },
        yaxis: {
            type: "linear",
            range: [4, 6],
            autorange: true
        },
        height: 598,
        width: 1080,
        autosize: true,
        showlegend: false
    }

    Plotly.newPlot('pointCloudDiv', data, layout);
}

function generateScatterChart() {
    Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }


        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: 'AAPL High',
            x: unpack(rows, 'Date'),
            y: unpack(rows, 'AAPL.High'),
            line: { color: '#17BECF' }
        }

        var trace2 = {
            type: "scatter",
            mode: "lines",
            name: 'AAPL Low',
            x: unpack(rows, 'Date'),
            y: unpack(rows, 'AAPL.Low'),
            line: { color: '#7F7F7F' }
        }

        var data = [trace1, trace2];

        var layout = {
            title: 'Basic Time Series',
        };

        Plotly.newPlot('scatterDiv', data, layout);
    })
}

function generatePieChart()
{
    var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('pieDiv', data, layout);
}