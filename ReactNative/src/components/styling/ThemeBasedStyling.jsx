import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const ThemeBasedStyling = () => {

    // This is a simple component that uses the useColorScheme hook to get the current color scheme of the device (light or dark)
    const theme = useColorScheme();
    console.log("Current theme:", theme);

    // This will true if the current theme is dark, and false if it is light
    const isDarkMode = theme === 'dark';

    // Apply conditional styles
    const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
    const textStyle = isDarkMode ? styles.darkText : styles.lightText;


    return (
        <View style={containerStyle}>
            <Text style={textStyle}>ThemeBasedStyling</Text>
        </View>
    )
}

export default ThemeBasedStyling

const styles = StyleSheet.create({
    darkContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lightText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
})