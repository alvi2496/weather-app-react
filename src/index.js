import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import WeatherContext from './contexts/WeatherContext';
import Summary from './components/Summary';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';

const App = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [oneCallData, setOneCallData] = useState(null);
    const [hourlyData, setHourlyData] = useState([]);
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        if (!weatherData) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=victoria,bc,ca&appid=${process.env.OPEN_WEATHER_API_KEY}`
            ).then(
                (response) => response.json()
            ).then(
                (data) => {
                    setWeatherData(data);
                }
            )
        }

        if(weatherData && !oneCallData)
            fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
            ).then(
                (response) => response.json()
            ).then(
                (data) => {
                    setOneCallData(data);
                    setHourlyData(data.hourly);
                    setDailyData(data.daily);
                }
        )
    }, []);

    console.log("weather data");
    console.log(weatherData);
    console.log("onecall data");
    console.log(oneCallData);

    return (
        <Container fixed>
            <WeatherContext.Provider value={weatherData}>
                <Grid container spacing={1}>

                        <Grid item xs={12}>
                            <Summary />
                        </Grid>

                        <Grid item xs={12}>
                            <HourlyWeather
                                hourlyData={hourlyData}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <DailyWeather
                                dailyData={dailyData}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <p>Misc</p>
                        </Grid>

                </Grid>
            </WeatherContext.Provider>
        </Container>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));