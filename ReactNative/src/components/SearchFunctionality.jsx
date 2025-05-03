import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const SearchFunctionality = () => {

    const contacts = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Charlie Black' },
        { id: 6, name: 'David White' },
        { id: 7, name: 'Eve Green' },
    ]

    const [searchQuery, setSearchQuery] = useState('')

    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const renderItem = ({ item }) => {
        return (
            <View style={styles.contactItem}>
                <Text style={styles.contactName}>{item.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact List</Text>

            <TextInput
                style={styles.searchBar}
                placeholder='Search Contact'
                placeholderTextColor='#aaa'
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <FlatList
                data={filteredContacts}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default SearchFunctionality

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        paddingTop: 50,
    },
    listContainer: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e88e5',
        marginBottom: 20,
        textAlign: 'center',
    },
    searchBar: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    contactItem: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
})