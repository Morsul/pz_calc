import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './stats/statsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
