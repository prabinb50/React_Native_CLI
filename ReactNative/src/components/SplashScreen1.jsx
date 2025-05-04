import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

export const SplashScreen1 = ({ onAnimationComplete }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current; // Animation for scaling the circle
    const textColorAnim = useRef(new Animated.Value(0)).current; // Animation for text color transition
    const textPositionAnim = useRef(new Animated.Value(0)).current; // Animation for text position

    useEffect(() => {
        // Start animations after a delay
        const timer = setTimeout(() => {
            Animated.parallel([
                // Circle expansion animation
                Animated.timing(scaleAnim, {
                    toValue: 15,
                    duration: 800,
                    useNativeDriver: true,
                }),

                // Text color transition animation
                Animated.timing(textColorAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: false,
                }),

                // Text position animation - move text up
                Animated.timing(textPositionAnim, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                })
            ]).start(() => {
                // Add a small delay before completing to ensure the green background is fully visible
                setTimeout(() => {
                    if (onAnimationComplete) {
                        onAnimationComplete();
                    }
                }, 1000);
            });
        }, 1500);
        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    // Interpolate text color from green to white
    const textColor = textColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#00A653', '#FFFFFF']
    });

    // Interpolate text position - move up by 20 pixels
    const textTranslateY = textPositionAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -22] // From normal position to moved up
    });

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {/* Animated circle background */}
                <View style={styles.circleWrapper}>
                    <Animated.View
                        style={[
                            styles.circleBackground,
                            { transform: [{ scale: scaleAnim }] }
                        ]}
                    />
                </View>

                {/* Static logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                </View>

                {/* Animated title text */}
                <Animated.Text
                    style={[
                        styles.title,
                        {
                            color: textColor,
                            transform: [{ translateY: textTranslateY }]
                        }
                    ]}
                >
                    BINHERO
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    content: {
        alignItems: 'center',
        zIndex: 2,
    },
    circleWrapper: {
        position: 'absolute',
        width: 172,
        height: 172,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleBackground: {
        position: 'absolute',
        backgroundColor: "#66CA98",
        width: 172,
        height: 172,
        borderRadius: 86,
    },
    logoContainer: {
        width: 172,
        height: 172,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
    },
    logo: {
        width: 135,
        height: 133,
        resizeMode: 'contain',
        zIndex: 3,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        zIndex: 3,
    }
});