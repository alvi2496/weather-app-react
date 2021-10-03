import React, { useContext } from 'react';
import { Card, CardContent, CardHeader, CircularProgress } from '@mui/material';
import WeatherContext from '../contexts/WeatherContext';

export default function Summary(){
    const data = useContext(WeatherContext);

    console.log(data);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getWeatherDescription = () => {
        const description = data && 
            data.weather && 
            data.weather[0] && 
            data.weather[0].description.toString();
        return  capitalizeFirstLetter(description);
    }

    const getTempInCelcius = () => {
        return data && 
        data.main && 
        data.main.temp &&
        (data.main.temp - 273).toFixed(0);
    }

    const getHighTemparature = () => {
        return data &&
        data.main &&
        data.main.temp_max &&
        (data.main.temp_max - 273).toFixed(0);
    }

    const getLowTemparature = () => {
        return data &&
        data.main &&
        data.main.temp_min &&
        (data.main.temp_min - 273).toFixed(0);
    }

    return (
        data ? 
        <Card>
            <CardHeader 
                title={data.name}
            />
            <CardContent>
                <p>{getWeatherDescription()}</p>
                <h2>{`${getTempInCelcius()}\u00b0`}</h2>
                <p>{`H: ${getHighTemparature()}\u00b0 L: ${getLowTemparature()}\u00b0`}</p>
            </CardContent>
        </Card>
        :
        <CircularProgress />
    )
}