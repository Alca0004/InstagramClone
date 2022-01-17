import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonComponent(props) {
    return (
        <TouchableOpacity style={styles.botton}>
            <Text style={styles.text}>{props.buttonName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botton: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})