import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// const dummyData = [
//     {
//         id: 1,
//         name: 'John Doe',
//         email: "j@gmail.com",
//         image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
//     },
//     {
//         id: 2,
//         name: 'Jane Smith',
//         email: "jane@gmail.com",
//         image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//     },
//     {
//         id: 3,
//         name: 'Mike Johnson',
//         email: "mike@gmail.com",
//         image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
//     },
//     {
//         id: 4,
//         name: 'Sarah Williams',
//         email: "sarah@gmail.com",
//         image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
//     },
//     {
//         id: 5,
//         name: 'David Brown',
//         email: "david@gmail.com",
//         image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
//     },
//     {
//         id: 6,
//         name: 'Emily Davis',
//         email: "emily@gmail.com",
//         image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
//     },
//     {
//         id: 7,
//         name: 'Alex Wilson',
//         email: "alex@gmail.com",
//         image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
//     },
//     {
//         id: 8,
//         name: 'Lisa Taylor',
//         email: "lisa@gmail.com",
//         image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
//     }
// ]

export default function FlatList() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' }}></Image>

                <Text>Name</Text>
                <Text>Email</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        paddingVertical: 30,
        paddingHorizontal: 5,
    },

    card: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
    }
})