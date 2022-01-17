import React from "react";
import {Text, View} from "react-native";
import UserPictureAndFollows from "../Components/UserPictureAndFollows";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
    
    const user = useSelector(state => state.user);

    return (
        <View>
            <UserPictureAndFollows user={user}/>
        </View>
    )
};