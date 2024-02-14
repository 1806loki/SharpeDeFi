const History = () => {
  return (
    <>
      <div className="max-w-screen bg-gray-900 pb-5 ">
        <div className="mx-auto mt-8 max-w-screen-lg  ">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-200">
              Latest Payments
            </p>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end">
                <div className="flex items-center">
                  <label
                    htmlFor=""
                    className="mr-2 flex-shrink-0 text-sm font-medium text-gray-200"
                  >
                    Sort by:
                  </label>
                  <select
                    name=""
                    className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm bg-gray-800 text-gray-200"
                  >
                    <option className="whitespace-no-wrap text-sm">
                      Recent
                    </option>
                  </select>
                </div>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-gray-800 py-2 px-3 text-center text-sm font-medium text-gray-200 shadow hover:bg-gray-700 focus:shadow"
                >
                  <svg
                    className="mr-1 h-4 w-4 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      className=""
                    />
                  </svg>
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border shadow bg-gray-800">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-normal py-4 text-sm font-medium text-gray-300 sm:px-6"
                  >
                    Invoice
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-300 sm:px-6">
                    Date
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-300 sm:px-6">
                    Amount
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-300 sm:px-6">
                    Status
                  </td>
                </tr>
              </thead>
              <tbody className="lg:border-gray-700">
                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-100 sm:px-6"
                  >
                    Standard Plan - Feb 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-300">
                        07 February, 2022
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    07 February, 2022
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-300 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-100 sm:px-6"
                  >
                    Standard Plan - Feb 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-300">
                        07 February, 2022
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    07 February, 2022
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-300 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-100 sm:px-6"
                  >
                    Standard Plan - Feb 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-300">
                        07 February, 2022
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    07 February, 2022
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-300 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr><tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-100 sm:px-6"
                  >
                    Standard Plan - Feb 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-300">
                        07 February, 2022
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    07 February, 2022
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-300 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-300 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;