/* eslint-disable react/prop-types */
import Card from "../UI/Card";

const WalletContainer = ({ transactions }) => {

  const totalSent = transactions
    .filter((transaction) => transaction.sent)
    .reduce((total, transaction) => total + transaction.sent, 0);


  const totalReceived = transactions
    .filter((transaction) => transaction.received)
    .reduce((total, transaction) => total + parseInt(transaction.received), 0);


  const latestBalance = transactions[transactions.length - 1]?.newBalance;

  return (
    <div className="w-full h-auto py-20">
      <div className="flex flex-col  justify-center h-1/2 md:flex-row md:justify-between items-center gap-10 mb-10">
        <Card title="Total Balance" balance={latestBalance} />
        <Card title="Total Expenses" sent={totalSent} />
        <Card title="Total Income" received={totalReceived} />
      </div>
    </div>
  );
};

export default WalletContainer;
