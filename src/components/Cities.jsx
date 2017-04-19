import React, { Component } from 'react';
import { createStore } from 'redux';

const cityName = ['TX/Austin', 'CO/Denver', 'CA/San Jose'];
//const saylentKey = '6135f78e52c9e3ca'
//const rootUrl = 'http://api.wunderground.com/api/'+saylentKey+'/conditions/q/';

const defaultState = [{}];

const reducer = function( state = defaultState, action) {
    switch ( action.type ) {
        case 'refresh' :
            return  {
                weather: [{
                    "cityName": "sdsd",
                    "temperature": 0

                }]
            };
        default:
            let weather = [];
            cityName.forEach(function (p1, p2) {
                weather.push({"cityName":p1, "temperature": p2})
            });
            return weather;
    }
    //return state;
};


const store = createStore(reducer)

class Cities extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
        store.dispatch( {type: 'refresh'})
        //console.log(this.state);
    }
    componentWillMount() {
        store.subscribe(() => this.setState(store.getState()));
    }
    render () {
        let rows = [];
        let cities = this.state.weather;
        console.log(cities)
        // cities.forEach(function (p1, p2) {
        //     rows.push(<span key={p2}> {p1.cityName} : {p1.temperature} </span>)
        // });
        return(
            <div>{rows}</div>
        );
    }

}

export default Cities