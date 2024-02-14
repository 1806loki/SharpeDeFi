/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../authContext/authContextProvider";
import { getUserByEmail } from "../../firebase/db";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { currentUser } = useAuthContext();

  useEffect(() => {
    async function getUserData() {
      try {
        const userEmail = currentUser?.email;
        const userData = await getUserByEmail(userEmail);
        if (userData) {
          setUser(userData);
         } else {
          console.log("No user found with email:", userEmail);
        }
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    }
    getUserData();
  }, [currentUser]);

 
  const value = {
    user,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
