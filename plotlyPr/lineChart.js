function main(){


	lineChart();
}
function lineChart(){
	var xOne = [1, 2, 3, 4];
	var yOne = [10, 15, 13, 17];
	var colorOne = 'rgb(128, 0, 128)';
	var xTwo = [1, 2, 3, 4];
	var yTwo = [16, 5, 11, 9];
	var colorTwo = 'rgb(50, 50, 200)'
	
	var trace1 = makeData(xOne,yOne,colorOne,"one");
	var trace2 = makeData(xTwo,yTwo,colorTwo, "two");




	var data = [trace1, trace2];

	var layout = {
		title:'Line and Scatter Plot',
		xaxis: {
		    title: 'x-axis',
		    showgrid: false,
		    zeroline: true,
		    showline: true
		},
		yaxis: {
			title: 'y-axis',
			showline: true
		},
	};

	Plotly.newPlot('lineChart', data, layout, {
		displaylogo:false
	});

}

function makeData(x, y, color, name){
	return {
		x: x,
		y: y,
		type: 'scatter',
		mode: 'lines+markers',
		marker: {
			color: color,
			size: 10
		},
		line: {
			color: color,
			width: 3,
			shape:'line'
		},
		text:['one','two','three','four'],
		name: name,

	}
}
