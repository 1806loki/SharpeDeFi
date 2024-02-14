import { ethers } from "ethers";

export const generateWalletAddress = () => {
  const wallet = ethers.Wallet.createRandom();
  const walletAddress = wallet.address;
  return walletAddress;
};
