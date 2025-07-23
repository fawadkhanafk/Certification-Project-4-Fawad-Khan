import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchTerm: '',
    sortOption: '',
};

 const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
    } ,

    setSortOption: (state, action) => {
        state.sortOption = action.payload;
    }, 

},
   
});


export const {setSearchTerm, setSortOption  } = filtersSlice.actions;

export default filtersSlice.reducer;