import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { addExpense as addExpenseAction, type Expense } from "../common/expenseSlice";

interface SystemState {
    isAddExpenseModalOpen: boolean;
    totalIncome: number;
    totalExpense: number;
}

const initialState: SystemState = {
    isAddExpenseModalOpen: false,
    totalIncome: 0,
    totalExpense: 0,
};

const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        openAddExpenseModal: (state) => {
            state.isAddExpenseModalOpen = true;
        },
        closeAddExpenseModal: (state) => {
            state.isAddExpenseModalOpen = false;
        },

        addIncome: (state, action) => {
            const amount = Number(action.payload) || 0;
            state.totalIncome += amount;
        },

        addExpense: (state, action) => {
            const amount = Number(action.payload) || 0;
            state.totalExpense += amount;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addExpenseAction, (state, action: PayloadAction<Expense>) => {
            const payload = action.payload as Expense;
            const amount = Number(payload.amount) || 0;
            if (payload.isIncome) {
                state.totalIncome += amount;
            } else {
                state.totalExpense += amount;
            }
        });
    },
});

export const {
    openAddExpenseModal,
    closeAddExpenseModal,
    addIncome,
    addExpense,
} = systemSlice.actions;

export default systemSlice.reducer;
