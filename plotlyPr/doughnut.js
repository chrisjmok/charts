function main(){

}
function doughnut(){
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
	  hole: 0.5,
	  type: 'pie'
	}];

	var layout = {
	  title: '<a href="http://www.statista.com/chart/2684/apple-stock-price-after-product-announcements/">Title as link</a>',
	  annotations: [
	    {
	      font: {
	        family: 'Times',
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