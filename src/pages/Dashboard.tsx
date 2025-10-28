import { expenseCategories } from "../utils/GeneralDatas";
import { getCategoryIcon } from "../utils/utils";
import type { CategoryType } from "../utils/GeneralDatas";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import type { Expense } from "../redux/common/expenseSlice";

interface TransactionCardProps {
  category: number;
  name: string;
  amount: number;
  isIncome?: boolean;
}

const TransactionCard = ({
  category,
  name,
  amount,
  isIncome,
}: TransactionCardProps) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-md mb-2">
      <div className="flex gap-4 items-center">
        <i className={`${getCategoryIcon(category)} text-xl w-8`}></i>
        <p>
          {name.slice(0, 35)}
          {name.length > 15 ? "..." : ""}
        </p>
      </div>
      <div>
        <p className={`${isIncome ? "text-green-300" : "text-red-300"}`}>
          {isIncome ? "+" : "-"}
          {amount}
        </p>
      </div>
    </div>
  );
};

const CategoryCard = ({ category }: { category: CategoryType }) => {
  const expenses = useSelector((state: any) => state.expenses as Expense[]);

  const totalForCategory = useMemo(() => {
    if (!Array.isArray(expenses)) return 0;
    return expenses
      .filter((e) => !e.isIncome && Number(e.category) === category.id)
      .reduce((sum, e) => sum + Number(e.amount || 0), 0);
  }, [expenses, category.id]);

  return (
    <div
      className="-full h-full group flex-col  justify-start items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg outline-1 outline-white/20 hover:scale-102
      hover:bg-white/30 cursor-pointer ease-in-out transition-all duration-300"
    >
      <div className="flex gap-2 items-center text-gray-400 group-hover:text-white ease-in-out transition-all duration-300">
        <i className={`${getCategoryIcon(category.id)} text-xl`}></i>
        <p className="text-xs">{category.name}</p>
      </div>
      <div className="text-white mt-4">
        <p className="text-3xl font-medium">
          {totalForCategory.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const expenses = useSelector((state: any) => state.expenses);
  const totalExpense = useSelector((state: any) => state.system.totalExpense);
  const totalIncome = useSelector((state: any) => state.system.totalIncome);

  return (
    <div className="h-full w-full p-4 relative  text-white">
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl ">Dashboard</h1>
        <p>Time Frame - Month</p>
      </div>
      <div className="grid grid-cols-4 gap-4  w-full  mt-12">
        <div className="-full h-full flex flex-col justify-start items-center backdrop-blur-sm bg-linear-to-b from-white/5 to-white/10 outline-1 outline-white/20 p-8 rounded-lg">
          <p>This month's Income</p>
          <p className="text-5xl text-blue-400 font-bold flex items-end">
            {Number(totalIncome || 0).toLocaleString()}
          </p>
          <p>last months data</p>
        </div>
        <div className=" w-full h-full flex flex-col justify-start items-center backdrop-blur-sm bg-linear-to-b from-white/5 to-white/10 outline-1 outline-white/20 p-8 rounded-lg">
          <p>This month's Expenses</p>
          <p className="text-5xl font-bold text-red-400 flex items-end">
            {Number(totalExpense || 0).toLocaleString()}
          </p>
          <p>last months data</p>
        </div>
        <div className=" w-full h-full flex flex-col justify-start items-center backdrop-blur-sm bg-linear-to-b from-white/5 to-white/10 outline-1 outline-white/20 p-8 rounded-lg">
          <p>This month's Saving</p>
          <p className="text-5xl font-bold text-green-500 flex items-end">
            {Number(
              Number(totalIncome || 0) - Number(totalExpense || 0)
            ).toLocaleString()}
          </p>
          <p>last months data</p>
        </div>
        <div className=" w-full h-full flex flex-col justify-start items-center backdrop-blur-sm bg-linear-to-b from-green-500/10 to-green-500/50 outline-1 outline-green-500/40 p-8 rounded-lg">
          <p>Total Saving</p>
          <p className="text-5xl font-bold text-white flex items-end">
            {Number(
              Number(totalIncome || 0) - Number(totalExpense || 0)
            ).toLocaleString()}
          </p>
        </div>
      </div>
      <hr className="my-8 w-1/2 mx-auto text-gray-300" />
      <p className="text-xl">Your Spendings based on Category</p>
      <div className="grid grid-cols-6 gap-4 w-full mt-4">
        {expenseCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="grid grid-cols-2 mt-8 gap-4">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg outline-1 outline-white/20 ">
          <p className="text-xl">Recent Transactions</p>
          <div className="mt-2 overflow-y-auto h-50 scrollbar-thin">
            {expenses.length > 0 ? (
              expenses
                .slice(0, 10)
                .sort(
                  (a: any, b: any) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .map((expense: Expense) => (
                  <TransactionCard
                    key={expense.id}
                    category={expense.category}
                    name={expense.title}
                    amount={expense.amount}
                    isIncome={expense.isIncome}
                  />
                ))
            ) : (
              <p className="text-sm text-gray-200 text-center">
                No recent transactions
              </p>
            )}
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          laudantium culpa ullam minus consequuntur inventore harum dolores quos
          nam dolore, sapiente voluptates dolorum, necessitatibus totam sint
          natus maiores tempore vel!
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
