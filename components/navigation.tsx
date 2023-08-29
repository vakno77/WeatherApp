import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MoreDaysScreen from "./moredays";
import TodayScreen from "./today";
import React, {useState} from "react";
import SearchBar from "./search";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import {faCalendarWeek} from "@fortawesome/free-solid-svg-icons/faCalendarWeek";


const Tab = createBottomTabNavigator();


const RouteNavigation = () => {

    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#121212', // Set the background color here
        },
    };

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <NavigationContainer theme={navTheme}>
            <SearchBar onSearch={setSearchQuery}/>
            <Tab.Navigator
                screenOptions={() => ({
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: '#121212',
                    },
                })}
            >
                <Tab.Screen
                    name="Today"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesomeIcon
                                icon={faCalendarDay}
                                style={focused ? { color: "#007AFF" } : { color: "#fff" }}
                            />
                        ),
                    }}
                >
                    {() => <TodayScreen searchQuery={searchQuery} />}
                </Tab.Screen>
                <Tab.Screen
                    name="16 days"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesomeIcon
                                icon={faCalendarWeek}
                                style={focused ? { color: "#007AFF" } : { color: "#fff" }}
                            />
                        ),
                    }}
                >
                    {() => <MoreDaysScreen searchQuery={searchQuery} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default RouteNavigation;