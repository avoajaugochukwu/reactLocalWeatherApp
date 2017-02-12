var React = require('react');
var ReactDOM = require('react-dom');

var $ = require('jquery');

var Axios = require('axios');


var data = {};
// $(document).ready(function() {
	class WeatherApp extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				
				locationUrl: "http://ip-api.com/json"
			}


			// call location function
			this.getLocation();
			this.getWeather();
		}


// {coord, weather, base, main, visibility, wind, clouds, dt, sys, id, name, cod}

// Function to obtain location
		getLocation() {
			Axios.get(this.state.locationUrl)
				.then(response => {
					console.log(response);
					this.setState({country: response.data.country});
					this.setState({region: response.data.regionName});
				})
					.catch(function (error) {
						console.log(error);
					});
		}


		getWeather() {

			var url = "http://api.openweathermap.org/data/2.5/weather?q=";
			var location = this.state.region;
			var apiKey = "&appid=1bf0c7372cfe1679eacd5906cefdf81d"
			// Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+{this.state.region}+"&appid=1bf0c7372cfe1679eacd5906cefdf81d")
			Axios.get(url + location + apiKey)
				.then(response => {
					console.log(response);
					this.setState({temp: response.data.main.temp});
					this.setState({des: response.data.weather[0].description});
					console.log(this.state.des);
				})
					.catch(function (error) {
						console.log(error);
					});
		}

		showIcon() {
			return 'Show Icon';
		}

		render () {


			return (
				<div>
					<h2>{this.state.region}, {this.state.country}</h2>
					<h4>{this.state.temp} &#176; F</h4>
					<h4>{this.state.des}</h4>

					<h1>{this.showIcon}</h1>
					<button className="btn btn-lg btn-primary" onClick={this.fetchData}>Change Color</button>

				</div>
				
			)
		}
	}


// ////////////



	const app = document.getElementById('app');
	ReactDOM.render(<WeatherApp />, app);

// });