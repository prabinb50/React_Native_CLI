import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const Splash = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})