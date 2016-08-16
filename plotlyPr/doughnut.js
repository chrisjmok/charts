function main(){
	doughnut([10,25,45,30]);
}

var phase = {
	applications :'label1',
	phone :'label2',
	interviews :'label3',
	success :'label4'
}

function doughnut2(data){
	var myPlot = document.getElementById('doughnut');
	var data = [{
	  labels: ['label1','label2','label3','label4'],
	  values: data,
	  //labels: ["complete","incomplete"],
	  domain: {
	    x: [0, 1]
	  },
	  marker:{
	  	colors:['rgb(66, 139, 202)', 'rgb(240, 173, 78)', 'rgb(92, 184, 92)', 'rgb(217, 83, 79)']
	  	// colors:['rgb(14, 133, 249)', 'rgb(240, 240, 240)']
	  },
	  text:['text1','text2','text3','text4'],
	  showlegend:false,
	  name: 'Progress',
	  textposition:'inside',
	  hoverinfo: 'percent',
	  textinfo: 'text',
	  hole: 0.5,
	  type: 'pie'
	}];

	var layout = {
	  title: 'click pieces to see stages in console',
	  annotations: [
	    {
	      font: {
	        family: 'Helvetica',
	        size: 16,
	        color:'#7f7f7f'
	      },
	      showarrow: false,
	      text: '<span>application <br> newline</span>',
	      x: 0.5,
	      y: 0.5
	    },
	  ],
	  height: 400,
	  width: 400
	};

	Plotly.newPlot('doughnut', data, layout, {
		staticPlot: false,
		displayModeBar:false
		//displaylogo: false
	});

	
	myPlot.on('plotly_click', function(data){

			switch(data.points[0].label){
				case phase.applications:
					console.log('app');
					break; 
				case phase.phone:
					console.log('phone');
					break;
				case phase.interviews:
					console.log('interviews');
					break;
				case phase.success:
					console.log('success');
					break;

			}

			//window.location = "http://www.facebook.com";
 
	});
}

function doughnut(data){
	var myPlot = document.getElementById('doughnut');
	var data = [{
	  labels: ['label1','label2','label3','label4'],
	  values: data,
	  //labels: ["complete","incomplete"],
	  domain: {
	    x: [0, 1]
	  },
	  marker:{
	  	colors:['rgb(66, 139, 202)', 'rgb(240, 173, 78)', 'rgb(92, 184, 92)', 'rgb(217, 83, 79)']
	  	// colors:['rgb(14, 133, 249)', 'rgb(240, 240, 240)']
	  },
	  text:['text1','text2','text3','text4'],
	  showlegend:false,
	  name: 'Progress',
	  textposition:'inside',
	  hoverinfo: 'percent',
	  textinfo: 'text',
	  hole: 0.5,
	  type: 'pie'
	}];

	var layout = {
	  title: 'click pieces to see stages in console',
	  annotations: [
	    {
	      font: {
	        family: 'Helvetica',
	        size: 16,
	        color:'#7f7f7f'
	      },
	      showarrow: false,
	      text: '<span>application <br> newline</span>',
	      x: 0.5,
	      y: 0.5
	    },
	  ],
	  height: 400,
	  width: 400
	};

	Plotly.newPlot('doughnut', data, layout, {
		staticPlot: false,
		displayModeBar:false
		//displaylogo: false
	});

	
	myPlot.on('plotly_click', function(data){

			switch(data.points[0].label){
				case phase.applications:
					console.log('app');
					break; 
				case phase.phone:
					console.log('phone');
					break;
				case phase.interviews:
					console.log('interviews');
					break;
				case phase.success:
					console.log('success');
					break;

			}

			//window.location = "http://www.facebook.com";
 
	});
}