var Fetch = require('whatwg-fetch');
var saylentKey = '6135f78e52c9e3ca'
var rootUrl = 'http://api.wunderground.com/api/'+saylentKey+'/conditions/q/';

module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiUrl, {
            headers: {
                // No need for special headers
            }
        })
            .then(function(response) {
                return response.json();
            });
    },
    fetchData: function() {

        // Get the data from the cache if possible
        if (citiesWeather[currentCity]) {
            this.updateData();
        }
        else {
            // Request new data to the API
            Api.get(cities[currentCity])
                .then(function(data) {
                    citiesWeather[currentCity] = data;
                    this.updateData();
                }.bind(this));
        }
    }
};