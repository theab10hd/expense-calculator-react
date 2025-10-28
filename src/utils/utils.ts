
export function getCategoryIcon(categoryId: number) {
    switch (categoryId) {
        case 1:
            return "fa-solid fa-utensils";        // Food & Dining
        case 2:
            return "fa-solid fa-bus";             // Transport
        case 3:
            return "fa-solid fa-shopping-bag";    // Shopping
        case 4:
            return "fa-solid fa-film";            // Entertainment
        case 5:
            return "fa-solid fa-heartbeat";       // Health & Fitness
        case 6:
            return "fa-solid fa-file-invoice";    // Bills & Utilities
        case 7:
            return "fa-solid fa-plane";           // Travel
        case 8:
            return "fa-solid fa-piggy-bank";      // Savings
        case 9:
            return "fa-solid fa-book";            // Education
        case 10:
            return "fa-solid fa-ellipsis-h";      // Others
        default:
            return "fa-solid fa-circle-question"; // Fallback icon
    }
}
