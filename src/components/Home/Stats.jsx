const stats = [
    { id: 1, name: "Total Transactions", value: "12.5 million" },
    { id: 2, name: "Assets Locked in Smart Contracts", value: "$150 billion" },
    { id: 3, name: "Active Wallets", value: "85,000" },
  ];
  
  export default function Stats() {
    return (
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-lg"
              >
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  