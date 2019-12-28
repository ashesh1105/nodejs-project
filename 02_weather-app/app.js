const request = require('request')

const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const log = console.log

/*
This project demostrates efficient use of callbacks. We define geocode and weather as
two functions in separate files under utils folder and require them in this file.
The two functions leverage callback placeholders. We then nest them in a call in this file.
we call mapbox to get latitude, longitude and then pass that to Dark Sky API to get
the weathwer details and print it
*/

/*
* Expected results from below call (values will vary):
* San Jose, California, United States =>
* Clear throughout the day. There's currently 44.78 degrees out. There is a 0 % chances of rain.
*/
let myPlace = 'San Jose, CA'
geocode(myPlace, (error, geoData) => {
    if (error) {
        log(error)
    } else {
        if (geoData.NoResultsErr) {
            log(geoData)
        } else {
            // Call Dark Sky API now!
            weather(geoData.latitude, geoData.longitude, (error, weatherData) => {
                if (error) {
                    log(error)
                } else {
                    log(geoData.place, '=>', weatherData.summary,
                        'There\'s currently', weatherData.temperature,
                        'degrees out. There is a', weatherData.precipProbability,
                        '% chances of rain.')
                }
            })
        }
    }
})





