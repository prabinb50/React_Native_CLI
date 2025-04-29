import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/bottomTabNavigation/Home';
import Profile from './src/components/bottomTabNavigation/Profile';
import Search from './src/components/bottomTabNavigation/Search';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/EvilIcons';

// create a tab navigator
const Tab = createBottomTabNavigator();

// Define the AppNavigator component that contains the tab navigation
const AppNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            tabBarStyle: { paddingTop: 5, height: 70, borderTopWidth: 0 }
        }} >
            {/* Define the Home screen */}
            < Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" size={22} color={color} />
                )
            }} />
            {/* Define the Profile screen */}
            < Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="user" size={22} color={color} />
                )
            }} />
            {/* Define the Search screen */}
            < Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="search1" size={22} color={color} />
                )
            }} />
        </Tab.Navigator >
    )
};


const TabNavigation = () => {
    return (
        <NavigationContainer>
            {/* Render the AppNavigator inside the NavigationContainer */}
            <AppNavigator />
        </NavigationContainer>
    );
};

export default TabNavigation;

const styles = StyleSheet.create({}); 
