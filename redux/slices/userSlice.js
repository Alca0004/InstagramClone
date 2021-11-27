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

export default userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        
    }
})