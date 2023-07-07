import React from 'react';
import axios from 'axios';
import { Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CityTable from './Table';
import Weather from './Weather';
import Error from './Error';
import './App.css';
import Map from './Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: {},
      error: false,
      errorMsg: '',
      displayMap: false,
      mapURL:'',
      displayWeather: false,
      weatherURL:'',
      weatherData: [],
      displayTable: false
    };
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleGetMapsData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`;      
      let dataFromAxios = await axios.get(url);
      // define weatherURL with a let statement to equal what i need to hit for my backend
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`;
      let weatherDataFromAxios = await axios.get(weatherURL)

      this.setState({
        mapsData: dataFromAxios[0],
        error: false,
        errorMsg: '',
        displayTable: true,
        displayMap: true,
        mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${dataFromAxios.data[0].lat},${dataFromAxios.data[0].lon}&zoom=13`,
        displayWeather: true,
        weatherData: weatherDataFromAxios.data
      })

    } catch (error) {
      let errorMsg = error.message + ': ' + error.response.data;
      this.setState({
        error: true,
        errorMsg: errorMsg,
        displayTable: false,
        displayMap: false,
        displayWeather: false,
      })

    }

  }

  render() {
    return (
      <>
      <h1>City Explorer</h1>
        <Form onSubmit={this.handleGetMapsData}>
          <label htmlFor="">Enter a City Name:<input type="text" onChange={this.handleCityInput}/>
          </label>
          <Button variant="success" onClick={this.handleGetMapsData}type="submit">Explore!</Button>
        </Form>
        {this.state.error ? (
          <Error errorMessage={this.state.errorMessage} />
        ) : (
        this.state.mapsData && <Map mapsData={this.state.mapsData} />
        )}
      </>
    );
  }
}

export default App;
