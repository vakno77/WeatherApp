import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../assets/style';
import DateTimeDisplay from "./date";
import {API_KEY} from "../config";
import {API_URL_TODAY} from "../config";
import NoResults from "./noresults";

const apiUrl = API_URL_TODAY;
const apiKey = API_KEY;

interface TodayScreenProps {
    searchQuery: string;
}

interface WeatherDataTodayProps {
    weatherData: any
}

const WeatherToday: React.FC<WeatherDataTodayProps> = ({weatherData}) => {

    let weatherType;
    let imageSource;
    let iconSource

    if (weatherData.main) {
        weatherType = weatherData.weather[0].main;

        switch (weatherType) {
            case 'Clouds':
                imageSource = require('../assets/clouds.jpg');
                iconSource = require('../assets/cloudy-icon.png');
                break;
            case 'Snow':
                imageSource = require('../assets/snow.jpg');
                iconSource = require('../assets/snow-icon.png');
                break;
            case 'Drizzle':
                imageSource = require('../assets/rain.jpg');
                iconSource = require('../assets/rain-icon.png');
                break;
            case 'Clear':
                imageSource = require('../assets/sunny-day.jpg');
                iconSource = require('../assets/sun-icon.png');
                break;
            case 'Thunderstorm':
                imageSource = require('../assets/thunderstorm.jpg');
                iconSource = require('../assets/thunderstorm-icon.png');
                break;
            case 'Rain':
                imageSource = require('../assets/rain.jpg');
                iconSource = require('../assets/rain-icon.png');
                break;
            default:
                imageSource = require('../assets/fog.jpg');
                iconSource = require('../assets/haze-icon.png');
                break;
        }
    }


    return (
        <View style={{flex: 1}}>
            {weatherData.main ? (
                    <View style={styles.tabContentContainer}>
                        <View style={styles.tabContent}>
                            {weatherData.main && (
                                <View>
                                    <DateTimeDisplay offsetInSeconds={weatherData.timezone}/>
                                    <Text style={[styles.text, styles.white, styles.bold]}>{weatherData.name}</Text>
                                    <Text style={styles.title}>{Math.ceil(weatherData.main.temp)}°C</Text>
                                </View>)
                            }
                        </View>
                        <View>TEST</View>
                        <Image style={styles.image}
                                           source={iconSource}/>
                        <ImageBackground
                            source={imageSource}
                            style={styles.backgroundImage}
                        />
                    </View>
                )
                : (
                    <NoResults></NoResults>
                )
            }
        </View>
    );
};
const TodayScreen: React.FC<TodayScreenProps> = ({searchQuery}) => {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            fetchData(searchQuery);
        } else {
            fetchData('Ljubljana');
        }
    }, [searchQuery]);

    const fetchData = async (city: string) => {
        try {
            const response = await fetch(apiUrl + "?q=" + city + "&units=metric" + `&appid=${apiKey}`);
            const jsonData = await response.json();
            setWeatherData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{flex: 1}}>
            <WeatherToday weatherData={weatherData}></WeatherToday>
        </View>
    );
};

export default TodayScreen;

