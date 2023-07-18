import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import { persistedReducer } from './persistConfig'

// const ignoredActions = [
//   'FLUSH',
//   'REHYDRATE',
//   'PAUSE',
//   'PERSIST',
//   'PURGE',
//   'REGISTER',
// ]

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persitor = persistStore(store)

export { store, persitor }

export type CartState = ReturnType<typeof store.getState>
