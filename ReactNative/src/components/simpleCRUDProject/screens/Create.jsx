import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const Create = ({ data, setData }) => {

    const [itemName, setItemName] = useState(''); // State to manage the name of the item
    const [stock, setStock] = useState(''); // State to manage the stock amount of the item
    const [isEdit, setIsEdit] = useState(false); // State to manage if the form is in edit mode
    const [editItemId, setEditItemId] = useState(null); // State to manage the ID of the item being edited
    const [unit, setUnit] = useState('kg'); // State to manage the unit of the item (default is kg)

    // Function to handle adding a new item
    const handlerAddItem = () => {
        // Check if itemName and stock are not empty
        if (!itemName || !stock) {
            alert("Please fill all fields");
            return;
        }

        // Prevent adding an item while in edit mode
        if (isEdit) {
            alert("Please click on the edit button to update the item");
            return;
        }

        // Check if itemName already exists in the list
        if (data.some((item) => item.name === itemName)) {
            alert("Item already exists in the list");
            return;
        }

        // check if itemName must be a string not a number or integer
        if (!isNaN(itemName)) {
            alert("Item name must be a string not a number or integer");
            return;
        }

        // Check if stock is a number
        if (isNaN(stock)) {
            alert("Stock must be a number");
            return;
        }

        // Check if stock is less than 0
        if (stock < 0) {
            alert("Stock must be greater than 0");
            return;
        }

        // Check if stock is less than 100
        if (stock > 100) {
            alert("Stock must be less than 100");
            return;
        }

        // Check if stock is an integer
        if (stock % 1 !== 0) {
            alert("Stock must be an integer");
            return;
        }

        // Create a new item object
        const newItem = {
            id: Date.now(),
            name: itemName,
            stock: stock,
            unit: unit,
        };
        // Update the data state with the new item
        setData([...data, newItem]);
        setItemName('');
        setStock('');
        setUnit('');
        setIsEdit(false);
    };

    // Function to handle deleting an item
    const deleteItemHandler = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };

    // Function to handle editing an item
    const editItemHandler = (item) => {
        setItemName(item.name);
        setStock(item.stock.toString());
        setUnit(item.unit);
        setIsEdit(true);
        setEditItemId(item.id);
    };

    // Function to handle updating an item
    const updateItemHandler = () => {
        const updatedData = data.map((item) => {
            if (item.id === editItemId) {
                return { ...item, name: itemName, stock: stock };
            }
            return item;
        });
        setData(updatedData);
        setItemName('');
        setStock('');
        setUnit('');
        setIsEdit(false);
    };

    return (
        <View style={styles.container}>
            {/* Input field for item name */}
            <TextInput
                placeholder='Enter an item name...'
                placeholderTextColor={'#A9A9A9'}
                style={styles.input}
                value={itemName}
                onChangeText={(item) => setItemName(item)}
            ></TextInput>

            {/* Input field for stock amount */}
            <TextInput
                placeholder='Enter stock amount...'
                placeholderTextColor={'#A9A9A9'}
                style={styles.input}
                value={stock}
                onChangeText={(item) => setStock(item)}
            ></TextInput>

            {/* Button to add or update an item */}
            <Pressable style={styles.btn} onPress={() => isEdit ? updateItemHandler() : handlerAddItem()}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>{isEdit ? "Edit Item in Stock" : "Add Item in Stock"}</Text>
            </Pressable>

            <View style={{ marginTop: 10 }}>
                {/* Heading for the list of items */}
                <Text style={styles.headingText}>All Items in Stock</Text>

                {/* List of items */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? '#f8d7da' : '#D7F6BFFF' }]}>
                            {/* Display item name */}
                            <Text style={styles.itemText}>{item.name}</Text>

                            <View style={{ flexDirection: 'row', gap: 30 }}>
                                {/* Display item stock and unit */}
                                <Text style={styles.itemText}>{item.stock} {item.unit}</Text>

                                {/* Edit button */}
                                <Pressable>
                                    <Text style={styles.itemText} onPress={() => editItemHandler(item)}>Edit</Text>
                                </Pressable>

                                {/* Delete button */}
                                <Pressable>
                                    <Text style={styles.itemText} onPress={() => deleteItemHandler(item.id)}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ gap: 10 }}
                ></FlatList>
            </View>
        </View>
    );
};

export default Create;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "4%",
        gap: 10,
    },
    input: {
        borderWidth: 1.2,
        borderColor: '#D7F6BFFF',
        borderRadius: 5,
        padding: 10,
    },
    btn: {
        // borderWidth: 1.2,
        // borderColor: '#D7F6BFFF',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#CABFEEFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // headingContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 15,
    //     paddingVertical: 10,
    // },
    headingText: {
        fontSize: 15,
        fontWeight: '500',
        marginVertical: 10,
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