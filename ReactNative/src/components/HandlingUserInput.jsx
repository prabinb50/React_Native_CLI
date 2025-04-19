import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const HandlingUserInput = () => {

    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    const handleSubmit = () => {
        setSubmittedText(text);
        // console.log("Submitted Text: ", text);

        // reset the text input field after submission
        setText("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HandlingUserInput</Text>

            <TextInput
                placeholder='Enter a text here...'
                style={styles.input}
                value={text}
                onChangeText={(text) => setText(text)} // This is a function that will be called when the text changes
            />

            <Pressable style={{ backgroundColor: '#000', padding: 10, borderRadius: 8, marginTop: 20 }} onPress={handleSubmit}>
                <Text style={{ color: "white" }}>Submit</Text>
            </Pressable>

            {submittedText ? (<Text style={{ marginTop: 20 }}>Result: {submittedText}</Text>) : null}
        </View>
    )
}

export default HandlingUserInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 20,
    },
})