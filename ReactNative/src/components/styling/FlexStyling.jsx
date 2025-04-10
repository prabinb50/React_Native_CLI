import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexStyling = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

export default FlexStyling

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up the full screen
        backgroundColor: "black"
    },
    box1: {
        flex: 1,
        backgroundColor: "blue",

    },
    box2: {
        flex: 2,
        backgroundColor: "green",

    },
    box3: {
        flex: 3,
        backgroundColor: "yellow",

    }
})