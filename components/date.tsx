import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import styles from "../assets/style";

interface DateProps {
    offsetInSeconds: number;
}
const DateTimeDisplay: React.FC<DateProps> = ({offsetInSeconds}) => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime= new Date();
            const offsetInMilliseconds = (offsetInSeconds * 1000) - (2 * 60 * 60 * 1000);
            const convertedTime = new Date(currentTime.getTime() + offsetInMilliseconds);
            setCurrentTime(convertedTime);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [offsetInSeconds]);


    const formatTime = (time:Date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };

        // @ts-ignore
        return time.toLocaleDateString('en-US', options);
    };

    return (
        <View>
            <Text style={[styles.text, styles.black]}>{formatTime(currentTime)}</Text>
        </View>
    );
};


export default DateTimeDisplay;