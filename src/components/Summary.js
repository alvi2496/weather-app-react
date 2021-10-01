import React, { useContext } from 'react';
import { Card } from '@mui/material';
import WeatherContext from '../contexts/WeatherContext';

export default function Summary(){
    const data = useContext(WeatherContext);

    return (
        <Card>
            <p>{data && data.main.temp}</p>
        </Card>
    )
}