import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexDirection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

export default FlexDirection

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up the full screen
        backgroundColor: "black",
        flexDirection: "row", // Change to "column" for vertical alignment
        justifyContent: "space-around", // Align items with space around them
        alignItems: "center", // Center items vertically
    },
    box1: {
        width: 80,
        height: 80,
        backgroundColor: "blue",

    },
    box2: {
        width: 80,
        height: 80,
        backgroundColor: "green",

    },
    box3: {
        width: 80,
        height: 80,
        backgroundColor: "yellow",
    }
})