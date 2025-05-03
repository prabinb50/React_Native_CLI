import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// dummy data 
const dummyData = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" },
    { id: 9, title: "Item 9" },
    { id: 10, title: "Item 10" },
    { id: 11, title: "Item 11" },
    { id: 12, title: "Item 12" },
    { id: 13, title: "Item 13" },
    { id: 14, title: "Item 14" },
    { id: 15, title: "Item 15" },
    { id: 16, title: "Item 16" },
    { id: 17, title: "Item 17" },
    { id: 18, title: "Item 18" },
    { id: 19, title: "Item 19" },
    { id: 20, title: "Item 20" },
    { id: 21, title: "Item 21" },
    { id: 22, title: "Item 22" },
    { id: 23, title: "Item 23" },
    { id: 24, title: "Item 24" },
    { id: 25, title: "Item 25" },
    { id: 26, title: "Item 26" },
    { id: 27, title: "Item 27" },
    { id: 28, title: "Item 28" },
    { id: 29, title: "Item 29" },
    { id: 30, title: "Item 30" },
]

const GridWithMap = () => {
    // console.log("GridWithMap");
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}>GridWithMap</Text>

            <ScrollView contentContainerStyle={styles.container} >
                {
                    dummyData.map((item, index) => {
                        return (
                            <View key={index} style={styles.gridItem}>
                                <Text style={{ color: "white" }}>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default GridWithMap

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    gridItem: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
})