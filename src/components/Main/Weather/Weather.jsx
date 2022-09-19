import React, { Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import WeatherCard from './WeatherCard/WeatherCard';


class Weather  extends Component {
    constructor(props) {
        super(props);
        this.state = { weatherList: this.props.defaultList }
        // Event binding (Bindear eventos)
        console.log('CONSTRUCTOR')
    }
    
    async componentDidMount(){
        //Petición HTTP
        // fetch('https://pokeapi.co/api/v2/pokemon')
        //     .then(resp => resp.json())
        //     .then(data => data)
        let lat =40.4165
        let lon= 3.70256
        let APIkey= process.env.APIKEY
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        const data = await resp.json();
        this.setState({
            weatherList: data.results
        })
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Pokelista: ', prevProps)
        console.log('prevState',prevState);
        console.log('componentDidUpdate');
    }


    handlerLoadWeather = async () => {
        let lat =40.4165
        let lon= -3.70256
        let APIkey= process.env.APIKEY
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        const data = await resp.json();
        this.setState({
            weatherList: data.results
        })
    }

    handlerResetWeather = () => {
        this.setState({
            weatherList: []
        })
    }

    handlerUpdate = () => {
        this.forceUpdate()
    }

    render() {
        console.log('RENDER')
        return (
            <section>
                <h1>Weather List</h1>
                {
                  this.state.weatherList.map(weather => 
                    <WeatherCard data={weather} key={uuidv4()}/>
                  )
                }
                <button onClick={this.handlerLoadWeather}>Load Weather</button>
                <button onClick={this.handlerResetWeather}>Reset Weather</button>
                <button onClick={this.handlerUpdate}>Force Update</button>
            </section>        
        );
    }
}

Weather.defaultProps = {
    defaultList: []
}

export default Weather;
