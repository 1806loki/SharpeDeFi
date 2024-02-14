/* eslint-disable react/prop-types */
import { useUserContext } from "../../context/userContext/userContextProvider";
import Card from "../UI/Card";

const WalletContainer = ({ transactions }) => {
  const { user } = useUserContext();
  const balance = user?.balance;

  const totalExpenses = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  console.log(totalExpenses);

  return (
    <div className="w-full h-auto py-20">
      <div className="flex flex-col  justify-center h-1/2 md:flex-row md:justify-between items-center gap-10 mb-10">
        <Card title="Total Balance" balance={balance + totalExpenses} />
        <Card title="Total Expenses " sent={totalExpenses} />
        <Card title="Total Income" received="45" />
      </div>
    </div>
  );
};

export default WalletContainer;
