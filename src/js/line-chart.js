const ctx = document.getElementsByClassName('line-chart');
new Chart(ctx, {
	type: 'line',
	data: {
	  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
	  datasets: [{
		label: 'Your Batiments',
		data: [65, 76, 80, 87, 74, 97],
		borderWidth: 6,
		borderColor: 'rgb(32, 111, 172)'
	  }]
	},
	options: {
	  scales: {
		y: {
		  beginAtZero: true
		}
	  }
	}
  });