import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from '../assets/style';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons/faAngleUp";
import {API_URL_FORECAST} from "../config";
import {API_KEY} from "../config";
import NoResults from "./noresults";

const apiUrl = API_URL_FORECAST;
const apiKey = API_KEY;

interface MoreDaysScreenProps {
    searchQuery: string;
}

interface WeatherDataMoreDaysProps {
    weatherData: any;
}

const WeatherMoreDays: React.FC<WeatherDataMoreDaysProps> = ({weatherData}) => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    let listValues: {
        dt: number;
        tempMorning: number;
        tempDay: number;
        dt_txt: Date;
        humidity: number;
        weather: {
            main:string,
            description:string,
        };
        icon: string;
        speed: number;
        rain:number;
    }[] = [];


    if (weatherData.list) {
        listValues = weatherData.list.map((item:any) => ({
            dt: item.dt,
            tempMorning: item.temp.morn,
            tempDay: item.temp.day,
            dt_txt: new Date(item.dt * 1000 - (2 * 60 * 60 * 1000)),
            humidity: item.humidity,
            weather: item.weather[0],
            icon: item.weather[0].icon,
            speed: item.speed,
            rain:item.rain
        }));
    }


    return (
        <View style={{flex: 1}}>
            {listValues.length === 0 ? (
                <NoResults></NoResults>
            ) : (
                <ScrollView>
                    {listValues && listValues.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            activeOpacity={1}
                        >
                            <View style={[styles.forecastDayWrapper, index === 0 && styles.forecastDayWrapperFirst]}>
                                <View style={styles.forecastDay}>
                                    <Text style={[styles.text, styles.white]}
                                          key={index}>{item.dt_txt.toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric',
                                    })}</Text>
                                    <Text style={[styles.text, styles.white]}>{Math.ceil(item.tempDay)}°C / {Math.ceil(item.tempMorning)}°C</Text>
                                    <Image style={styles.image}
                                           source={{uri: `https://openweathermap.org/img/wn/${item.icon}.png`}}/>
                                    {expandedIndex === index ? (
                                            <FontAwesomeIcon icon={faAngleUp} style={{color: "#fff"}}/>
                                        ) :
                                        <FontAwesomeIcon icon={faAngleDown} style={{color: "#fff"}}/>
                                    }
                                </View>
                                {expandedIndex === index && (
                                    <View style={styles.forecastDayAdditional}>
                                        <Text style={[styles.secondaryTitle, styles.white]}>{item.weather.main}</Text>
                                        <Text style={[styles.text, styles.white]}>{item.weather.description}</Text>
                                        <View style={styles.forecastDayAdditionalSecondRow}>
                                            <Text style={[styles.text, styles.white]}>Humidity: {item.humidity}%</Text>
                                            <Text style={[styles.text, styles.white]}>Wind: {item.speed} m/s</Text>
                                            <Text style={[styles.text, styles.white]}>Rain: { item.rain ? item.rain : 0} mm</Text>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};
const MoreDaysScreen: React.FC<MoreDaysScreenProps> = ({searchQuery}) => {

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
            const response = await fetch(apiUrl + "?q=" + city + "&cnt=16" + "&units=metric" + `&appid=${apiKey}`);
            const jsonData = await response.json();
            setWeatherData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{flex: 1}}>
            <WeatherMoreDays weatherData={weatherData}></WeatherMoreDays>
        </View>
    );
};

export default MoreDaysScreen;

