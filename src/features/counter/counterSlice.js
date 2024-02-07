import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCard: (state) => {

      state.value.push(Math.floor(Math.random() * 100)) 



      localStorage.setItem("arr" , JSON.stringify([...state.value]))


    },

    sortCard: (state) => {
      
      state.value.sort((a,b) => {
        return a - b
      })

      localStorage.setItem("arr" , JSON.stringify([...state.value]))

    },
 
    dellCard: (state , index ) => {
      let newArr = []

      // arr.slice(index.payload , 1)

      for (const i of state.value) {
        if (i !== state.value[index.payload]) {
          newArr.push(i)
        }
      }

      state.value = newArr  

      localStorage.setItem("arr" , JSON.stringify([...state.value]))
      
    },

    takeIt: (state) => {

      state.value = JSON.parse( localStorage.getItem("arr"))

    }


  },
})

export const { addCard, sortCard , dellCard , takeIt  } = counterSlice.actions

export default counterSlice.reducer
