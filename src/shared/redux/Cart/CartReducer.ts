import { IFormCartProduct } from '@/shared/forms/IFormCartProduct'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartInitialState {
  amount: number
  items: IFormCartProduct[]
}

const initialState: ICartInitialState = {
  amount: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<IFormCartProduct>) => {
        const newState = { ...state }
        const hasItem = state.items.find(
          (item) => item.id === action.payload.id,
        )

        if (!hasItem) {
          newState.items = [...newState.items, action.payload]
          newState.amount = newState.amount += 1
          return newState
        }
      },
      prepare: (item: IFormCartProduct) => {
        return { payload: item }
      },
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const newState = { ...state }
      const hasIdItem = state.items.find((item) => item.id === action.payload)

      if (hasIdItem) {
        const newIdItems = state.items.filter(
          (item) => item.id !== action.payload,
        )
        newState.items = [...newIdItems]
        newState.amount = newState.amount -= 1
        return newState
      }
    },
    deleteAll: () => {
      localStorage.removeItem('persist:root')
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, deleteAll } = cartSlice.actions

export default cartSlice.reducer
