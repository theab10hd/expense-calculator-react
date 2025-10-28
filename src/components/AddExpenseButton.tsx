import { useState } from "react";
import {
  expenseCategories,
  getLocalTimeHHMM,
  incomeCategories,
} from "../utils/GeneralDatas";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAddExpenseModal,
  openAddExpenseModal,
} from "../redux/system/systemSlice";
import { addExpense } from "../redux/common/expenseSlice";

const AddExpenseModal = () => {
  const [isIncome, setIsIncome] = useState(false);
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState<number | "">("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<string | "">("");
  const [time, setTime] = useState<string | "">("");
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !amount || !category) {
      alert("Please fill in all required fields!");
      return;
    }

    const newExpense = {
      title,
      amount: Number(amount),
      category,
      date: date || new Date().toISOString().split("T")[0],
      time: time || getLocalTimeHHMM(),
      isIncome,
      notes: notes || "",
    };

    dispatch(addExpense(newExpense));
    dispatch(closeAddExpenseModal());
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setTime("");
    setNotes("");
    setIsIncome(false);
  };

  return (
    <div className="fixed h-full w-full z-30 flex items-center justify-center bg-black/50 backdrop-blur-xs ">
      <div
        className={`bg-white/30 outline outline-white/30 rounded-xl w-[90%] max-w-md p-8 relative backdrop-blur-sm text-white`}
      >
        <button
          onClick={() => dispatch(closeAddExpenseModal())}
          className="absolute top-3 right-3 text-gray-200 hover:text-white transition cursor-pointer"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <h2 className="text-xl font-semibold mb-4 ">
          {isIncome ? "Add New Income" : "Add New Expense"}
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex items-center gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="expense"
                defaultChecked
                className="accent-black w-4 h-4 outline-0"
                onClick={() => setIsIncome(false)}
              />
              <span>Expense</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="income"
                className="accent-black w-4 h-4 outline-0"
                onClick={() => setIsIncome(true)}
              />
              <span>Income</span>
            </label>
          </div>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder={`${isIncome ? "Income" : "Expense"} title`}
            className="border border-gray-300 rounded p-2 outline-none"
          />
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              required
              placeholder="Amount"
              className="outline-none flex-1 bg-transparent "
            />
            <span className="text-white ml-2">₹</span>
          </div>

          <select
            className="border border-gray-300 rounded p-2 outline-none"
            defaultValue=""
            onChange={(e) => setCategory(Number(e.target.value))}
          >
            <option value="" disabled className="bg-gray-800">
              Select Category
            </option>

            {(isIncome ? incomeCategories : expenseCategories).map(
              (category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-gray-800 hover:bg-black"
                >
                  {category.name}
                </option>
              )
            )}
          </select>
          <div className="flex gap-4 ">
            <input
              type="date"
              className="border border-gray-300 rounded p-2 outline-none w-full"
              defaultValue={new Date().toISOString().split("T")[0]}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="border border-gray-300 rounded p-2 outline-none w-full bg-transparent text-white white-clock"
              defaultValue={getLocalTimeHHMM()}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <textarea
            name="notes"
            id="notes"
            className="border border-gray-300 rounded p-2 outline-none w-full resize-none"
            placeholder="Add any notes..."
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white rounded p-2 hover:bg-gray-800 transition cursor-pointer"
          >
            {isIncome ? "Add Income" : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
};

const AddExpenseButton = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(
    (state: any) => state.system.isAddExpenseModalOpen
  );

  return (
    <div className="relative">
      {isModalOpen && <AddExpenseModal />}
      <button
        title="Add New Expense"
        className="bg-white/50 backdrop-blur-lg outline  outline-white/20 hover:rotate-180 flex items-center justify-center text-white p-4 w-14 h-14 cursor-pointer rounded-full hover:bg-white hover:text-black ease-in-out duration-300 transition-all fixed bottom-10 right-10 z-20"
        onClick={() => dispatch(openAddExpenseModal())}
      >
        <i className="fas fa-plus text-2xl"></i>
      </button>
    </div>
  );
};

export default AddExpenseButton;
