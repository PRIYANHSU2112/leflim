import { createSlice } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

const initialState  = {
  info: null,
}

export const tvSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   loadimfo: (state,action)=>{
    state.info=action.payload
   },
   removeinfo: (state,action)=>{
    state.info=null;
   }
  },
})

// Action creators are generated for each case reducer function
export const { loadimfo,removeinfo } = tvSlice.actions

export default tvSlice.reducer