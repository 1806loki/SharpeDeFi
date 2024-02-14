import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "@firebase/firestore";
import { db } from "./firebase";

const userRef = collection(db, "users");

export const addUser = async (data) => {
  try {
    const docRef = await addDoc(userRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const q = query(userRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }

    let userData;
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });

    return userData;
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
};

export const handleTransaction = async (
  senderWalletId,
  receiverWalletId,
  amount
) => {
  try {
    const senderQuery = query(
      collection(db, "users"),
      where("walletId", "==", senderWalletId)
    );
    const senderQuerySnapshot = await getDocs(senderQuery);

    if (senderQuerySnapshot.empty) {
      throw new Error("Sender not found");
    }

    const senderDoc = senderQuerySnapshot.docs[0];
    const senderData = senderDoc.data();

    const receiverQuery = query(
      collection(db, "users"),
      where("walletId", "==", receiverWalletId)
    );
    const receiverQuerySnapshot = await getDocs(receiverQuery);

    if (receiverQuerySnapshot.empty) {
      throw new Error("Receiver not found");
    }

    const senderTransactionData = {
      receiverId: receiverWalletId,
      sent: -amount,
      timestamp: new Date(),
      newBalance: senderData.balance - amount,
    };

    const senderTransactions = senderData.transactions || [];
    await updateDoc(senderDoc.ref, {
      balance: senderData.balance - amount,
      transactions: [...senderTransactions, senderTransactionData],
    });

    const receiverDoc = receiverQuerySnapshot.docs[0];
    const receiverData = receiverDoc.data();
    const receiverTransactionData = {
      senderId: senderWalletId,
      received: amount,
      timestamp: new Date(),
      newBalance: receiverData.balance + parseInt(amount),
    };

    const receiverTransactions = receiverData.transactions || [];
    await updateDoc(receiverDoc.ref, {
      balance: receiverData.balance + parseInt(amount),
      transactions: [...receiverTransactions, receiverTransactionData],
    });

    console.log("Transaction completed successfully");
  } catch (error) {
    console.error("Error handling transaction:", error);
    throw error;
  }
};

export const fetchTransactions = async (walletId) => {
  try {
    const userQuery = query(
      collection(db, "users"),
      where("walletId", "==", walletId)
    );

    const userQuerySnapshot = await getDocs(userQuery);

    if (userQuerySnapshot.empty) {
      throw new Error("User not found");
    }

    const userDataDoc = userQuerySnapshot.docs[0];
    const userData = userDataDoc.data();

    const transactions = userData.transactions || [];

    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
