var React = require('react');
var ReactDOM = require('react-dom');
import Request from 'superagent';
import _ from 'lodash';
var $ = require('jquery');

var data = {};
// $(document).ready(function() {
	class WeatherApp extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				weather : [],
				url : "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d"
			}
			var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d";
			Request.get(url).then((response) => {
				setTimeout(3000);

				this.setState({
					items: response.body.weather.main
				})
			});
			if (typeof this.state.items === undefined) {

			}
			console.log(this.state.items);

			

			



					// ajax.get(this.state.url, function(err, res){
  			// 	if (err) throw err;
  			// 			  this.setState({local:res});
					// });
		// console.log(this.state.local);
		}

	// componentWillMount() {
	// 	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d";
	// 	Request.get(url).then((response) => {
	// 		this.setState({
	// 			items: response.body.weather.main
	// 		})
	// 	});
	// 	console.log(this.state.items);
	// }
// {coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod}
	fetchData () {
					


		// ajax.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d")
		// .end((error, response) => {
		// 	if (!error && response) {
		// 		this.setState({ items: response });
		// 	} else {
		// 		console.log('There was an error', error);
		// 	}
		// });
// var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d";

		// alert(this.state.items);


		// $.getJSON({
	 //        url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d"
	 //  }).then(function(data) {
	 //  		$('.greeting-id').empty();
		//     $('.greeting-content').empty();


		    
		//     $('.greeting-id').append(data.coord.lon);
		//     $('.greeting-content').append(data.author);
		// });
	}





		render () {
			// var datas = _.map(this.state.items, (data) => {
			// 	return <p>{data.coord}</p>
			// })
			var data = this.state.items;
			return (
				<div>
				<h1>I showed up{this.state.weather}</h1>
				<button className="btn btn-lg btn-primary" onClick={this.fetchData}>Change Color</button>
				<h3>Show something {this.state.items}</h3>
			</div>
				
			)
		}
	}


// ////////////



	const app = document.getElementById('app');
	ReactDOM.render(<WeatherApp />, app);

// });