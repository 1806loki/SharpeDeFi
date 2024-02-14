/* eslint-disable react/prop-types */
import { LuSendHorizonal } from "react-icons/lu";
import { FaLongArrowAltUp } from "react-icons/fa";

const Card = ({ title, balance, sent, received }) => {
  return (
    <div className="max-w-md mx-auto h-auto bg-gray-100 shadow-md rounded-lg overflow-hidden p-6">
      <h2 className="text-medium font-semibold text-gray-700 py-2">{title}</h2>
      <p className="text-3xl font-semibold text-gray-900 mb-4 py-2">
        ₹ {balance || sent || received}
      </p>
      {(sent || received || balance) && (
        <p className="text-xs px-auto font-semibold text-gray-900 mb-4 py-2">
          {(sent && (
            <span className="flex items-center">
              Total Amount sent is
              <span className="flex items-center text-red-500">
                <i className="-rotate-180">
                  <FaLongArrowAltUp />
                </i>
                {sent}
              </span>
            </span>
          )) ||
            (received && (
              <span className="flex items-center justify-between">
                Total Amount received is
                <span className="flex items-center text-green-500">
                  <i>
                    <FaLongArrowAltUp />
                  </i>
                  {received}
                </span>
              </span>
            )) ||
            (balance && (
              <span>
                Total Amount balance is
                <span className="text-gray-500"> {balance}</span>
              </span>
            ))}
        </p>
      )}
      {balance && (
        <div className="flex flex-col md:flex-row md:justify-end gap-4">
          <button className="px-4 py-2 rounded-full flex justify-around items-center border-2 hover:border-gray-500 focus:border-gray-500 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
            Send
            <LuSendHorizonal className="ml-2 text-gray-500 -rotate-90" />
          </button>
          <button className="px-4 py-2 rounded-full flex items-center justify-around border-2 text-gray-700 hover:bg-gray-200 hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
            Receive
            <LuSendHorizonal className="ml-2 text-gray-500 rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
