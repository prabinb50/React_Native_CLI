import { Pressable, StyleSheet, Text, View } from 'react-native'
import Alltems from './Alltems';
import LowStock from './LowStock';
import Create from './Create';
import { useState } from 'react';

const data = [
    { id: 1, name: 'Wheat', stock: 5, unit: 'kg' },
    { id: 2, name: 'Rice', stock: 15, unit: 'kg' },
    { id: 3, name: 'Sugar', stock: 25, unit: 'kg' },
    { id: 4, name: 'Salt', stock: 0, unit: 'kg' },
    { id: 5, name: 'Flour', stock: 50, unit: 'kg' },
    { id: 6, name: 'Oil', stock: 3, unit: 'L' },
    { id: 7, name: 'Butter', stock: 1, unit: 'kg' },
]

const HomeScreen = () => {

    const [view, setView] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>

            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, view === 0 ? { backgroundColor: "#72C37AFF" } : null]} onPress={() => setView(0)}>
                    <Text style={[styles.btnText, view === 0 ? { color: "white" } : null]}>All Items</Text>
                </Pressable>

                <Pressable style={[styles.button, view === 1 ? { backgroundColor: "#72C37AFF" } : null]} onPress={() => setView(1)}>
                    <Text style={[styles.btnText, view === 1 ? { color: "white" } : null]}>Low Stock</Text>
                </Pressable>

                <Pressable style={[styles.button, view === 2 ? { backgroundColor: "#72C37AFF" } : null]} onPress={() => setView(2)}>
                    <Text style={[styles.btnText, view === 2 ? { color: "white" } : null]}>Create</Text>
                </Pressable>
            </View>

            {view === 0 && <Alltems data={data} />}
            {view === 1 && <Alltems data={data.filter((item) => item.stock < 20)} />}
            {view === 2 && <Create />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: "4%",
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        // marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 15,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: '#72C37AFF',
    },
    btnText: {
        fontSize: 15,
        color: '#72C37AFF',
    },
})