import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import RouteNavigation from "./components/navigation";
import * as Font from 'expo-font';
import styles from "./assets/style";
import {useEffect, useState} from "react";


export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFontsAsync = async () => {
        await Font.loadAsync({
            'Roboto-Regular': require('./assets/fonts/Roboto-Light.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFontsAsync();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.appContainer}>
            <RouteNavigation />
            <StatusBar style="auto" />
        </View>
    );
}