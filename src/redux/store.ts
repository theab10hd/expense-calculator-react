import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./common/expenseSlice";
import systemReducer from "./system/systemSlice";

export const store = configureStore({
    reducer: {
        expenses: expenseReducer,
        system: systemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
