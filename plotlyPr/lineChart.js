function main(){


	lineChart();
	singleLine();
}
function singleLine(){
	var xOne = [1, 2, 3, 4];
	var yOne = [10, 15, 13, 17];
	var colorOne = 'rgb(128, 0, 128)';
	var hoverLabels = ['<span># of calls</span><br><span># of meetings</span>','two','three','four'];

	var trace1 = makeData(xOne,yOne,colorOne,hoverLabels);
	
	var data = [trace1];

	var layout = {
		title:'Line and Scatter Plot',
		xaxis: {
		    title: 'title',
		    showgrid: false,
		    zeroline: true,
		    zerolinecolor: '#969696',
		    showline: false
		},
		yaxis: {
			title: 'y-axis',
			showline: true
		},
		showlegend:false
	};

	Plotly.newPlot('singleLine', data, layout, {
		displaylogo:false
	});

}

function lineChart(){
	var xOne = [1, 2, 3, 4];
	var yOne = [10, 15, 13, 17];
	var colorOne = 'rgb(128, 0, 128)';
	var xTwo = [1, 2, 3, 4];
	var yTwo = [16, 5, 11, 9];
	var colorTwo = 'rgb(50, 50, 200)';
	// var hoverLabels = 
	
	var trace1 = makeData(xOne,yOne,colorOne,xOne);
	var trace2 = makeData(xTwo,yTwo,colorTwo, xTwo);




	var data = [trace1, trace2];

	var layout = {
		title:'Remove buttons from Modebar',
		xaxis: {
		    title: 'x-axis',
		    showgrid: false,
		    zeroline: true,
		    showline: true,
		    tickmode:
		},
		yaxis: {
			title: 'y-axis',
			showline: true
		},
		showlegend:false
	};

	Plotly.newPlot('lineChart', data, layout, {
		displaylogo:false,
		scrollZoom:true,
		//http://community.plot.ly/t/remove-options-from-the-hover-toolbar/130/2
		modeBarButtonsToRemove:['zoomIn2d', 'zoomOut2d', 'lasso2d', 'select2d']
	});

}

function makeData(x, y, color, hoverLabels){
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
		text:hoverLabels,
		name: name,

	}
}
