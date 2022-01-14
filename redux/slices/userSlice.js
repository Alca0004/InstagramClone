import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    profilePicture: "",
    followers: 100,
    following: 200,
    post: 10,
    about: 'So many of my smiles are because of you.',
    followedBy: ['ElonMusk', 'SalvadoreDali', 'PabloPicasso']
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
                post: state.post,
                about: state.about,
                followedBy: state.followedBy,
            }
        },
        logout: (state) => {
            return{
                ...state,
                username: "",
                followers: 0,
                following: 0,
                post: 0,
                about: "",
                followedBy: [],
            }
        }
    }
});

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;