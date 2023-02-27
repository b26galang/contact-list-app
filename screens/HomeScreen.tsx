import { useState, Dispatch, useReducer } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Pressable } from 'react-native';
import { contactReducer, ContactState } from '../ContactReducer';
import { Props } from '../types';

const initialState: ContactState = {
    Contact: {
        name: "",
        number: 0,
        email: ""
    },
    contacts: [
        { name: "Irene", number: 0, email: "email" },
        { name: "Sam", number: 0, email: "email" },
        { name: "Elena", number: 0, email: "email" },
        { name: "Augustina", number: 0, email: "email" },
        { name: "Sarah", number: 0, email: "email" }
    ]
}

export default function HomeScreen({ navigation }: Props["home"]) {

    const [contactState, dispatch] = useReducer(contactReducer, initialState);

    return (<View style={styles.container}>

        <Text style={styles.header}>Add a new contact</Text>

        <Text>Name:</Text>
        <TextInput style={styles.input} onChangeText={(c) => dispatch({ type: "SET_NAME", payload: c })} />

        <Text>Phone Number:</Text>
        <TextInput style={styles.input} onChangeText={(c) => dispatch({ type: "SET_NUMBER", payload: Number(c) })} />

        <Text>Email:</Text>
        <TextInput style={styles.input} onChangeText={(c) => dispatch({ type: "SET_EMAIL", payload: c })} />

        {/* <Text style={styles.tagContainer}>Add a Tag</Text>
        <View>
            <Pressable style={styles.tag}>Family</Pressable>
            <Pressable style={styles.tag}>Work</Pressable>
        </View> */}

        <Button title="Add" onPress={() => dispatch({ type: "ADD_CONTACT" })} />
        <br />

        {/* Will render all contacts by name */}
        {contactState.contacts.map(contact =>
            <Button key={contact.name}
                title={`${contact.name}`}
                onPress={() => navigation.navigate("Contact", { contactName: contact.name })}
            />
        )}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        height: 25,
        marginBottom: 20,
    },
    tag: {
        width: 100,
        border: 1,
        backgroundColor: "red",
        color: "#fff",
        padding: 4
    },
    tagContainer: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 5
    }
})