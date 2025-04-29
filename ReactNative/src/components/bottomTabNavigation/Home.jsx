import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Home</Text>

            {/* Navigation Section */}
            <View style={styles.navigationContainer}>
                {/* Profile Navigation Button */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Go to Profile</Text>
                </Pressable>

                {/* Search Navigation Button */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.buttonText}>Go to Search</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Home

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    navigationContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        backgroundColor: '#4a6ea9',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        cursor: 'pointer',
    }
})