import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
// import Error from './Error';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: {},
      error: false,
      errorMsg: '',
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
      let response = await axios.get(url);
      let dataFromAxios = response.data;

      this.setState({
        mapsData: dataFromAxios[0],
        error: false,
        errorMsg: ''
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.response.data.error
      })

    }

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleGetMapsData}>
          <label htmlFor=""> Enter a City Name:
            <input type="text" onChange={this.handleCityInput}/>
          </label>
          <button onClick={this.handleGetMapsData}type="submit">Explore!</button>
        </form>
        {this.state.mapsData && <Map mapsData={this.state.mapsData} />
        }

        {
          this.state.error
          ? <p>{this.state.errorMsg}</p>
          : <p>{this.state.locationData.display_name}</p>
        }
      </>
    )
  }
}

export default App;
