import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function ProfileHeader(props) {
    return (
        <View>
            <Text>Username</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});