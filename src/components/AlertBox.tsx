import { useEffect, useState } from "react";

interface AlertBoxProps {
  title: string;
  message: string;
  onCancel: () => void;
  onOk: () => void;
  color?: "blue" | "red" | "green";
}

const AlertBox: React.FC<AlertBoxProps> = ({
  title,
  message,
  onCancel,
  onOk,
  color,
}) => {
  const [colorClass, setColorClass] = useState("");

  const getColorClass = () => {
    switch (color) {
      case "red":
        setColorClass("bg-red-500 hover:bg-red-600");
        break;
      case "green":
        setColorClass("bg-green-500 hover:bg-green-600");
        break;
      default:
        setColorClass("bg-blue-500 hover:bg-blue-600");
    }
  };

  useEffect(() => {
    getColorClass();
  }, [color]);

  return (
    <div className="h-screen w-screen fixed flex justify-center items-center bg-black/50">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-50 w-100 bg-white p-4  shadow-lg">
        <h1 className="font-medium">{title}</h1>
        <p className="text-sm text-gray-800 max-h-100 overflow-y-auto mt-2">
          {message}
        </p>
        <div className="flex gap-2 mt-8 absolute bottom-4 right-4">
          <button
            className="bg-gray-200 px-4 py-2  hover:bg-gray-300  cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`${colorClass} text-white px-4 py-2   cursor-pointer`}
            onClick={onOk}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
