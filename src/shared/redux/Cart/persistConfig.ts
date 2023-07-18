import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './CartReducer'

const persistConfig = {
  key: 'root',
  storage,
}

export const persistedReducer = persistReducer(persistConfig, cartReducer)
