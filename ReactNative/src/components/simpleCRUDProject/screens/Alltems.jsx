import { FlatList, StyleSheet, Text, View } from 'react-native'

const Alltems = ({ data }) => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? '#f8d7da' : '#D7F6BFFF' }]}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.stock} {item.unit}</Text>
                    </View>
                )}
                contentContainerStyle={{ gap: 10 }}
            ></FlatList>
        </View>
    )
}

export default Alltems

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headingText: {
        fontSize: 15,
        fontWeight: '500',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        borderRadius: 7,
    },
    itemText: {
        fontSize: 14
    }
})

