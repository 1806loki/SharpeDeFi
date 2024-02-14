 import { Navigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext/userContextProvider";
import { useAuthContext } from "../../context/authContext/authContextProvider";

const WalletProfileCard = () => {
  const { userLoggedIn } = useAuthContext();
  const { user } = useUserContext();

   if (!userLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-xl mt-20">
        <div className="bg-gray-800 shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={user?.photoURL || "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-HD-Image.png"}
              alt="User's avatar"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl font-medium leading-8">
              {user?.displayName || " "}
            </h3>
            <table className="text-xs my-3 text-gray-300">
              <tbody>
                {user?.displayName && (
                  <tr>
                    <td className="px-2 py-2 font-semibold">Username</td>
                    <td className="px-2 py-2">{user.displayName}</td>
                  </tr>
                )}
                <tr>
                  <td className="px-2 py-2 font-semibold">Email</td>
                  <td className="px-2 py-2">{user.email}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 font-semibold">Wallet Address</td>
                  <td className="px-2 py-2">
                    <p className="wrap-text">{user.walletId}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletProfileCard;
