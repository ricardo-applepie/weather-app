import { createSlice, current } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: any = {
  locations: [

  ],
};

export const locationReducer = createSlice({
  name: 'Locations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add todo item ;
    getLocation: (state, { payload }) => {
    }
  },
});


export default locationReducer.reducer;
