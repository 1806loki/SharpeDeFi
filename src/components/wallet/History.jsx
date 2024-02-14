/* eslint-disable react/prop-types */
const History = ({ transactions }) => {
  console.log(transactions);
  return (
    <>
      <div className="max-w-screen bg-gray-900 pb-5 ">
        <div className="mx-auto mt-8 max-w-screen-lg  ">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-200">
              Wallet Transactions
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border shadow bg-gray-800">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="border-b lg:table-header-group">
                <tr>
                  <td
                    width="20%"
                    className="whitespace-normal py-4 text-sm font-medium text-gray-300 sm:px-6"
                  >
                    Wallet ID
                  </td>
                  <td className="whitespace-normal py-4 text-sm text-center font-medium text-gray-300 sm:px-6">
                    Type
                  </td>
                  <td className="whitespace-normal py-4 text-sm text-center font-medium text-gray-300 sm:px-6">
                    Amount
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-300 sm:px-6">
                    Time
                  </td>
                </tr>
              </thead>

              {transactions.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td
                      width="20%"
                      className="whitespace-no-wrap py-4 text-sm font-bold text-gray-100 sm:px-6 max-w-[150px] overflow-hidden truncate"
                    >
                      {transaction.receiverId || transaction.senderId}
                    </td>
                    <td
                      className={`whitespace-no-wrap py-4 text-sm text-center font-bold ${
                        transaction.sent ? "text-green-500" : "text-red-500"
                      }  sm:px-6`}
                    >
                      {transaction.sent ? "sent" : "received"}
                    </td>
                    <td className="whitespace-no-wrap  py-4 px-6 text-center  text-sm text-gray-300 lg:text-center sm: text-[12px]">
                      ₹ {-transaction.sent || transaction.received}
                    </td>
                    <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                      {transaction.timestamp.nanoseconds}
                    </td>
                  </tr>
                );
              })}
              <tbody className="lg:border-gray-700"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
