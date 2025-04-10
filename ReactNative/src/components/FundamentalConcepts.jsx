import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FundamentalConcepts = () => {

    // We can also use inline styles like we did in the TouchableOpacity component but it is not recommended as it can make the code messy and hard to read
    // We can also give css using javascript object like we did in the Image component, but it is not recommended as it reloads the component every time it renders and can cause performance issues
    const style = {
        image: {
            width: 200,
            height: 300,
        }

    }
    // So it is better to use StyleSheet.create method to create a stylesheet and then use it in the component, which is given at the bottom


    return (
        // View component is the main container for the app
        // It can contain other components like Text, Image, Button, etc.
        // It is similar to a div in HTML
        // We can also use SafeAreaView instead of View to avoid the notch area in iOS devices and the status bar in Android devices
        <SafeAreaView style={styles.container}>
            {/* Display a simple text */}
            <Text style={styles.text}>Prabin Joshi</Text>

            {/* Display an image from a URL */}
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' }}
                style={style.image}
            />

            {/* Button with an alert on press */}
            <Button
                title='Press me'
                onPress={() => alert('Hello Prabin')}

            />

            {/* TouchableOpacity with an alert on press */}
            <TouchableOpacity
                onPress={() => alert('Hello my name is Prabin Joshi')}
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 50 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Click me</Text>
            </TouchableOpacity>

            {/* TouchableHighlight with an alert on press */}
            <TouchableHighlight
                onPress={() => alert('Hello my name is Prabin Joshi')}
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 50 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Click me</Text>
            </TouchableHighlight>

            {/* Pressable with an alert on press */}
            <Pressable
                onPress={() => alert('Hello my name is Prabin Joshi')}
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 50 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Click me</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default FundamentalConcepts

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#999',
        padding: 20,
        // paddingHorizontal: 20,
        // paddingVertical: 30,
        textAlign: 'center',
        gap: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
})