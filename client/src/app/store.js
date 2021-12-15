import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../services/postApi'

export default configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
    }
})