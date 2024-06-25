import { configureStore } from '@reduxjs/toolkit'
import PaintingSlice from './Slices/PaintingSlice'

export const store = configureStore({
  reducer: {
    PaintingSlice:PaintingSlice
  },
})