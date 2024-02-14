import Transact from "../components/transaction/Transact";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const Transaction = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Transact />
      <Footer />
    </div>
  );
};

export default Transaction;
