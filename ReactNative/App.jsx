import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
    return (
        // View component is the main container for the app
        // It can contain other components like Text, Image, Button, etc.
        // It is similar to a div in HTML
        // We can also use SafeAreaView instead of View to avoid the notch area in iOS devices and the status bar in Android devices
        <SafeAreaView>
            {/* Display a simple text */}
            <Text>Prabin Joshi</Text>

            {/* Display an image from a URL */}
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' }}
                style={{ width: 200, height: 300, marginTop: 20 }}
            />

            {/* Button with an alert on press */}
            <Button
                title='Press me'
                onPress={() => alert('Hello Prabin')}
            />

            {/* TouchableOpacity with an alert on press */}
            <TouchableOpacity
                onPress={() => alert('Hello my name is Prabin Joshi')}
                style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Click me</Text>
            </TouchableOpacity>

            {/* TouchableHighlight with an alert on press */}
            <TouchableHighlight
                onPress={() => alert('Hello my name is Prabin Joshi')}
                style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Click me</Text>
            </TouchableHighlight>

            {/* Pressable with an alert on press */}
            <Pressable
                onPress={() => alert('Hello my name is Prabin Joshi')}
                style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Click me</Text>
            </Pressable>
        </SafeAreaView>
    )
}
export default App



