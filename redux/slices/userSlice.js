import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    profilePicture: "",
    followers: 783,
    following: 1564,
    posts: 350,
    about: 'Learning React Native Expo, Redux, Hooks, etc...',
    followedBy: ['ElonMusk', 'SalvadorDali', 'PabloPicasso']
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            return{
                ...state,
                username: action.payload.username, 
                profilePicture: action.payload.profilePicture,
                followers: state.followers,
                following: state.following,
                posts: state.posts,
                about: state.about,
                followedBy: state.followedBy,
            }
        },
        logout: (state) => {
            return{
                ...state,
                username: "",
                profilePictures: "",
                followers: 0,
                following: 0,
                posts: 0,
                about: "",
                followedBy: [],
            }
        }
    }
});

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;