import { configureStore } from "@reduxjs/toolkit";
import credentials from './slices/credentials.slice'

export default configureStore({
  reducer: {
    credentials    
  }
})