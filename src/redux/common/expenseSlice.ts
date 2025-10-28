import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Expense {
    id: string;
    title: string;
    amount: number;
    category: number;
    date: string;
    time: string;
    isIncome: boolean;
    notes?: string;
}

const initialState: Expense[] = [];

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: {
            reducer: (state, action: PayloadAction<Expense>) => {
                state.push(action.payload);
            },
            prepare: (expense: Omit<Expense, "id">) => ({
                payload: {
                    ...expense,
                    id: nanoid(),
                },
            }),
        },
        removeExpense: (state, action: PayloadAction<string>) => {
            return state.filter((exp) => exp.id !== action.payload);
        },
        editExpense: (state, action: PayloadAction<Expense>) => {
            const index = state.findIndex((exp) => exp.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addExpense, removeExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
