import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/stackNavigation/Home';
import Profile from './src/components/stackNavigation/Profile';
import Search from './src/components/stackNavigation/Search';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Define the AppNavigator component that contains the stack navigation
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            {/* Define the Home screen */}
            <Stack.Screen name="Home" component={Home} />
            {/* Define the Profile screen */}
            <Stack.Screen name="Profile" component={Profile} />
            {/* Define the Search screen */}
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
};


const StackNavigation = () => {
    return (
        <NavigationContainer>
            {/* Render the AppNavigator inside the NavigationContainer */}
            <AppNavigator />
        </NavigationContainer>
    );
};

export default StackNavigation;

const styles = StyleSheet.create({}); 
