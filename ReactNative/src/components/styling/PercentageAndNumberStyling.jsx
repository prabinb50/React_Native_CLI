import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PercentageAndNumberStyling = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '50%', height: '30%', backgroundColor: 'red' }}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', padding: 20 }}>Width</Text>
            </View>

        </View>
    )
}

export default PercentageAndNumberStyling

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
    }
})