import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartInitialState {
  amount: number
  idItems: string[]
}

const initialState: ICartInitialState = {
  amount: 0,
  idItems: [],
}

interface IIdItem {
  id: string
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<IIdItem>) => {
        console.log(action.payload)
        const newState = { ...state }
        const hasIdItem = state.idItems.find((id) => id === action.payload.id)

        if (!hasIdItem) {
          newState.idItems = [...newState.idItems, action.payload.id]
          newState.amount = newState.amount += 1
          return newState
        }
      },
      prepare: (id: string) => {
        return { payload: { id } }
      },
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const newState = { ...state }
      const hasIdItem = state.idItems.find((id) => id === action.payload)

      if (hasIdItem) {
        const newIdItems = state.idItems.filter((id) => id !== action.payload)
        newState.idItems = [...newIdItems]
        newState.amount = newState.amount -= 1
        return newState
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
