var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var data = {};

class WeatherApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weather : []
		}
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bf0c7372cfe1679eacd5906cefdf81d"
		}).then((data) {
			this.setState({ weather: data});
		});

		console.log(this.state.weather);
	}
	render () {
		
		return (
			<h1>I showed up{this.state.weather}</h1>
		)
	}
}


// ////////////



const app = document.getElementById('app');
ReactDOM.render(<WeatherApp />, app);