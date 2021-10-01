import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import WeatherContext from './contexts/WeatherContext';
import Summary from './components/Summary';

const App = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=victoria,bc,ca&appid=${process.env.OPEN_WEATHER_API_KEY}`
        ).then(
            (response) => response.json()
        ).then(
            (data) => {
                setWeatherData(data);
                setLoading(false);
            }
        );
        
    }, weatherData);

    return (
        <Container fixed>
            <WeatherContext.Provider value={weatherData}>
                <Grid container spacing={1}>

                        <Grid item xs={12}>
                            <Summary />
                        </Grid>

                        <Grid item xs={12}>
                            <p>Hourly Weather</p>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <p>Daily Weather</p>
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