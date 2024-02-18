import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
});

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions; 

export default gptSlice.reducer;