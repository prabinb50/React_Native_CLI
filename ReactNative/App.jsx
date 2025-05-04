import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import NativeSplashScreen from 'react-native-splash-screen';
import OnboardingScreen1 from './src/components/OnboardingScreen1';
import { SplashScreen1 } from './src/components/SplashScreen1';

const App = () => {
    // State to track the current screen
    const [currentScreen, setCurrentScreen] = useState('splash');

    useEffect(() => {
        // Hide the native splash screen when the app loads
        NativeSplashScreen.hide();
    }, []);

    // Callback function to handle the completion of the splash screen animation
    const handleSplashComplete = () => {
        setCurrentScreen('onboarding'); // Move to the onboarding screen
    };

    // Return appropriate screen based on the current screen state
    return (
        <SafeAreaView style={styles.container}>
            {currentScreen === 'splash' ? (
                // Show the splash screen
                <SplashScreen1 onAnimationComplete={handleSplashComplete} />
            ) : (
                // Show the onboarding screen
                <OnboardingScreen1 />
            )}

        </SafeAreaView>
    )
}

export default App

// Styles for the container
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


// style property "marginTop" is not supported by react native

