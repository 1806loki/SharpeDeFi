import { generateWalletAddress } from "../utils/functions/walletId";
import { addUser, getUserByEmail } from "./db";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const handleUserData = async (user) => {
  const existingUser = await getUserByEmail(user.email);
  if (existingUser) {
    return user.providerData;
  }

  const walletId = generateWalletAddress();
  const userData = {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    walletId: walletId,
    balance: 10000,
  };
  await addUser(userData);
  return user.providerData;
};

const handleError = (error, action) => {
  console.error(`Error ${action}:`, error);
  throw error;
};

export const createUserWithEmail = async (email, password) => {
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return await handleUserData(userCredential.user);
  } catch (error) {
    handleError(error, "creating user");
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    handleError(error, "signing in");
  }
};



export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    return await handleUserData(result.user);
  } catch (error) {
    handleError(error, "signing in with Google");
  }
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
    console.log("User signed out successfully");
  } catch (error) {
    handleError(error, "signing out");
  }
};
