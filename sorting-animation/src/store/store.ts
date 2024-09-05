import { configureStore} from "@reduxjs/toolkit"
import { sortArraySlice } from "./sortArray-slice";

export const store = configureStore({
    reducer:{
        sortArray:sortArraySlice.reducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;