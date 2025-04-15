import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ScrollViewTopic = () => {
    return (
        <ScrollView
            contentContainerStyle={{ gap: 10 }}
            horizontal
            style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </ScrollView>
    )
}

export default ScrollViewTopic

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up the full screen
        backgroundColor: "black",
        padding: 10,

    },
    box1: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "blue",

    },
    box2: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "green",

    },
    box3: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "yellow",
    }
})