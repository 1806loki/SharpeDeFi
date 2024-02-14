import { useState } from "react";
import { handleTransaction } from "../../firebase/db";
 import { useUserContext } from "../../context/userContext/userContextProvider";

const Transact = () => {
  const [transactData, setTransactData] = useState({
    walletId: "",
    amount: 0,
    message: "",
  });

  const { user } = useUserContext();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const userWalletId = user.walletId;
    const { walletId, amount } = transactData;
    console.log(userWalletId, walletId, amount);
    handleTransaction(userWalletId, walletId, amount);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "walletId") {
      const regexWalletId = /\b0x[0-9a-fA-F]{40}\b/;

      if (!regexWalletId.test(value) || value.trim() === "") {
        setErrors({
          ...errors,
          [name]: "Enter a valid WalletId",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }

    if (name === "amount") {
      if (+value > 10000 || +value < 0 || isNaN(+value)) {
        setErrors({
          ...errors,
          [name]: "Enter a valid amount",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }

    setTransactData({
      ...transactData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 ">
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center"></div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="walletId"
                className="block text-sm font-medium text-gray-700 "
              >
                Wallet Number
              </label>
              <input
                id="walletId"
                type="text"
                className={`mt-1 p-3 block w-full text-gray-700 border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.walletId ? "border-red-500" : ""
                }`}
                placeholder="Enter wallet number"
                value={transactData.walletId}
                onChange={handleChange}
                name="walletId"
              />
              {errors.walletId && (
                <p className="text-red-500 text-sm mt-1">{errors.walletId}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                max="10000"
                className={`mt-1 p-3 block w-full text-gray-700 border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.amount ? "border-red-500" : ""
                }`}
                placeholder="Enter amount"
                value={transactData.amount}
                name="amount"
                onChange={handleChange}
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <input
                id="message"
                type="text"
                className="mt-1 p-3 block w-full text-gray-700 border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter message"
                value={transactData.message}
                onChange={handleChange}
                name="message"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transact;
