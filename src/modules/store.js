import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './charSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
