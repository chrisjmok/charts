function main(){
	progChart(35);
	linkMid(85);
}

function progChart(perc){
	var data = [{
	  values: [perc,100-perc],
	  //labels: ["complete","incomplete"],
	  domain: {
	    x: [0, 1]
	  },
	  marker:{
	  	colors:['rgb(52, 155, 255)', 'rgb(240, 240, 240)']
	  	// colors:['rgb(14, 133, 249)', 'rgb(240, 240, 240)']
	  },
	  showlegend:false,
	  name: 'Progress',
	  hoverinfo: 'none',
	  textinfo: 'none',
	  hole: .9,
	  type: 'pie'
	}];

	var layout = {
	  title: '<a href="http://www.statista.com/chart/2684/apple-stock-price-after-product-announcements/">Title as link</a>',
	  annotations: [
	    {
	      font: {
	        family: 'Helvetica',
	        size: 80,
	        color:'#7f7f7f'
	      },
	      showarrow: false,
	      text: perc+'<sup>%</sup>',
	      x: 0.5,
	      y: 0.5
	    },
	  ],
	  height: 400,
	  width: 400
	};

	Plotly.newPlot('prog', data, layout, {
		staticPlot: false,
		displayModeBar:false
		//displaylogo: false
	});
}

function linkMid(perc){
		var data = [{
	  values: [perc,100-perc],
	  //labels: ["complete","incomplete"],
	  domain: {
	    x: [0, 1]
	  },
	  marker:{
	  	colors:['rgb(52, 155, 255)', 'rgb(240, 240, 240)']
	  	// colors:['rgb(14, 133, 249)', 'rgb(240, 240, 240)']
	  },
	  showlegend:false,
	  name: 'Progress',
	  hoverinfo: 'none',
	  textinfo: 'none',
	  hole: .9,
	  type: 'pie'
	}];

	var layout = {
	  title: 'Percentage Hyperlink',
	  annotations: [
	    {
	      font: {
	        family: 'Times',
	        size: 80,
	        color:'#7f7f7f'
	      },
	      showarrow: false,
	      text: '<a href="http://www.statista.com/chart/2684/apple-stock-price-after-product-announcements/">'+perc+'%'+'</a>',
	      x: 0.5,
	      y: 0.5
	    },
	  ],
	  height: 400,
	  width: 400
	};

	Plotly.newPlot('linkMid', data, layout, {
		staticPlot: false,
		displayModeBar:false
		//displaylogo: false
	});
}


