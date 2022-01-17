import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

export default function UserPictureAndFollows(props) {

    const { user } = props;

    return (
        <View styles={styles.container}>
            <Image
                style={styles.userPicture}
                source={{uri: user.profilePicture}}
            />
            <View>
            <Text>{user.posts}</Text>
            <Text>Post</Text>
            </View>
            <View>
            <Text>{user.followers}</Text>
            <Text>Followers</Text>
            </View>
            <View>
            <Text>{user.following}</Text>
            <Text>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    followsContainer: {
        alignItems: "center",
        justifyContent: 'center',
    }
})