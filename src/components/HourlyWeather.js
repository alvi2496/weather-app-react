import { Card, CardContent, CircularProgress, Paper } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';

export default function HourlyWeather(props) {
    const data = useContext(WeatherContext)

    // console.log(hourlyData);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getHourlyDataPapers = () => {
        const hourlyPapers = props.hourlyData.forEach((hourly) => (
            <Paper>
                <p>{new Date(hourly.dt).getHours()}</p>
                <p>{capitalizeFirstLetter(hourly.weather[0].description.toString())}</p>
                <p>{(hourly.temp - 273).toFixed(0)}</p>
            </Paper>
        ));
        return hourlyPapers;
    }

    return (
        props.hourlyData && props.hourlyData.length > 0 ? 
        <Card>
            <CardContent>
                {
                   getHourlyDataPapers() 
                }
            </CardContent>
        </Card>
        :
        <CircularProgress />
    )
}