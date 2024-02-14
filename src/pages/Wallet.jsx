import History from "../components/wallet/History";
import WalletContainer from "../components/wallet/WalletContainer";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ProfileCard from "../components/wallet/ProfileCard";
import { useUserContext } from "../context/userContext/userContextProvider";
import { useEffect, useState } from "react";
import { fetchTransactions } from "../firebase/db";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);

  const { user } = useUserContext();

  useEffect(() => {
    const handleTransactions = async () => {
      try {
        const getTransactions = await fetchTransactions(user.walletId);
         setTransactions(getTransactions);
      } catch (error) {
        console.log("Error in fetching Transaction", error);
      }
    };

    handleTransactions();
  }, [user]);

  return (
    <div className="h-auto  bg-gray-900 text-white">
      <Navbar />
      <ProfileCard />
      <WalletContainer transactions={transactions} />
      <History transactions={transactions} />
      <Footer />
    </div>
  );
};

export default Wallet;
