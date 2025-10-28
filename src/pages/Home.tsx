import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="text-center">
        <div className="mt-4">
          <h1 className="text-5xl">
            {" "}
            <span className="text-indigo-600 font-bold">ExpenseCalculator</span>
            .io
          </h1>
          <p className="text-gray-700 max-w-200 mx-auto mt-4">
            The Expense Tracker helps you keep an eye on your daily spending and
            manage your budget with ease. It organizes your expenses, shows
            where your money goes, and helps you plan better for the future.
            Stay in control of your finances and build smarter saving habits,
            one step at a time.
          </p>
          <Link to="/dashboard">
            <PrimaryButton className="mt-4">Get Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
