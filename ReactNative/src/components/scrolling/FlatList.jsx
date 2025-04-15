import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

// Mock data array with user information for our FlatList
const dummyData = [
    {
        id: 1,
        name: 'John Doe',
        email: "john@gmail.com",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    },
    {
        id: 2,
        name: 'Amanda Lewis',
        email: "amanda@gmail.com",
        image: "https://images.unsplash.com/photo-1496440737103-cd596325d314"
    },
    {
        id: 3,
        name: 'Michael Johnson',
        email: "michael@gmail.com",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    },
    {
        id: 4,
        name: 'Sarah Williams',
        email: "sarah@gmail.com",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
        id: 5,
        name: 'David Brown',
        email: "david@gmail.com",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
        id: 6,
        name: 'Emily Davis',
        email: "emily@gmail.com",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
        id: 7,
        name: 'James Wilson',
        email: "james@gmail.com",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
        id: 8,
        name: 'Jennifer Taylor',
        email: "jennifer@gmail.com",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4"
    },
    {
        id: 9,
        name: 'Robert Martinez',
        email: "robert@gmail.com",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
        id: 10,
        name: 'Lisa Anderson',
        email: "lisa@gmail.com",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604"
    },
    {
        id: 11,
        name: 'Thomas White',
        email: "thomas@gmail.com",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
        id: 12,
        name: 'Patricia Harris',
        email: "patricia@gmail.com",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        id: 13,
        name: 'Christopher Allen',
        email: "chris@gmail.com",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    },
    {
        id: 14,
        name: 'Nancy Young',
        email: "nancy@gmail.com",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56"
    },
    {
        id: 15,
        name: 'Daniel King',
        email: "daniel@gmail.com",
        image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6"
    },
    {
        id: 16,
        name: 'Karen Wright',
        email: "karen@gmail.com",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
    },
    {
        id: 17,
        name: 'Matthew Scott',
        email: "matthew@gmail.com",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
    },
    {
        id: 18,
        name: 'Sandra Green',
        email: "sandra@gmail.com",
        image: "https://images.unsplash.com/photo-1629747387925-6905ff5a558a"
    },
    {
        id: 19,
        name: 'Kevin Baker',
        email: "kevin@gmail.com",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f"
    },
    {
        id: 20,
        name: 'Betty Hall',
        email: "betty@gmail.com",
        image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0"
    }
]

// FlatList is a core component in React Native that is used to render a list of items in a scrollable view.
// FlatList is optimized for large data sets and provides features like item separators, pull-to-refresh, and more.
// It is designed to handle large data sets efficiently by only rendering items that are currently visible on the screen, which helps improve performance and reduce memory usage.
// FlatList is a better option than ScrollView for rendering long lists of data, as it only renders the items that are currently visible on the screen, which helps improve performance and reduce memory usage.
export default function FlatListTopic() {
    return (
        <View style={styles.container}>
            <FlatList
                // Source data for the list
                data={dummyData}
                // Defines how each item is rendered
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                            source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' }}></Image>

                        <Text>Name</Text>
                        <Text>Email</Text>
                    </View>
                )}
                // Unique key for each item
                keyExtractor={item => item.id}
                // Component to render between items
                ItemSeparatorComponent={<View style={{ height: 10 }} />}
                // Number of columns in the grid
                numColumns={2}
                // Styling for how columns are arranged
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}>
            </FlatList>
        </View>
    )
}

// Styles for the component
const styles = StyleSheet.create({
    // Container style for the entire screen
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    // Style for each user card
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
    }
})
