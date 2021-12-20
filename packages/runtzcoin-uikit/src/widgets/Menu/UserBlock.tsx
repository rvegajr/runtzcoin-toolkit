/* eslint-disable import/named */
import React from "react";
import Button from "../../components/Button/Button";
import { useAccountWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account : string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ login, logout, account }) => {
  const { onPresentConnectModal } = useAccountWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
