import React from "react";
import { useModal } from "../Modal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
}

const useAccountWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  return { onPresentConnectModal };
};

export default useAccountWalletModal;
