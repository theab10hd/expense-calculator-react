export const introMessages = [
    'Track your spending',
    'Plan your budget',
    'Save smarter every day'
]

export const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
]


export type CategoryType = {
    id: number;
    name: string;
}

export const expenseCategories: CategoryType[] = [
    {
        id: 1,
        name: "Food & Dining"
    },
    {
        id: 2,
        name: "Transport"
    },
    {
        id: 3,
        name: "Shopping",
    },
    {
        id: 4,
        name: "Entertainment"
    },
    {
        id: 5,
        name: "Health & Fitness"
    },
    {
        id: 6,
        name: "Bills & Utilities"
    },
    {
        id: 7,
        name: "Travel"
    },
    {
        id: 8,
        name: "Investments"
    },
    {
        id: 9,
        name: "Education"
    },
    {
        id: 10,
        name: "Others"
    }
];

export const incomeCategories: CategoryType[] = [
    {
        id: 1,
        name: "Salary",
    },
    {
        id: 2,
        name: "Freelancing",
    },
    {
        id: 3,
        name: "Investments",
    },
    {
        id: 4,
        name: "Business",
    },
    {
        id: 5,
        name: "Rental Income",
    },
    {
        id: 6,
        name: "Interest & Dividends",
    },
    {
        id: 7,
        name: "Gifts",
    },
    {
        id: 8,
        name: "Refunds",
    },
    {
        id: 9,
        name: "Bonuses",
    },
    {
        id: 10,
        name: "Others",
    },
];

export const getLocalTimeHHMM = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
};
