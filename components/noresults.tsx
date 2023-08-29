import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from "../assets/style";

const NoResults = () => {
    return (
        <View style={styles.noResults}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/noresults.jpg')}
            ></ImageBackground>
            <View style={styles.noResultsTextContainer}>
                <Text style={styles.secondaryTitle}>No results found</Text>
            </View>
        </View>
    );
};


export default NoResults;