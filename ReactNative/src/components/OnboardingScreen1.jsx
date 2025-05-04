import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OnboardingScreen1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to BinHero App!</Text>
            <Text>Your main app content goes here</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00AB55',
    },
});

export default OnboardingScreen1;