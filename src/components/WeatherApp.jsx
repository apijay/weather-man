import React, { Component } from 'react';
import Cities from './Cities'

//const cityName = ['TX/Austin', 'CO/Denver', 'CA/San Jose'];

class WeatherApp extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <Cities/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default WeatherApp;
