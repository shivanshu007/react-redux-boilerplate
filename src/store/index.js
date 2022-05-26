import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import dataReducer from './reducer/dataReducer'
export const store = configureStore({
    reducer: {
        data: dataReducer
    },
})

setupListeners(store.dispatch)





