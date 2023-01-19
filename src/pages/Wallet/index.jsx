import React from "react";
import WalletModal from "../../components/WalletModal";
import useWalletInfo from "../../hooks/useWalletInfo";
import { injected } from "../../utils/connector";

const Wallet = ({ show, handleClose }) => {
  const { accInfo, activate, isActive, chainID, deactivate, balance } =
    useWalletInfo();

  // enable metamask wallet
  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  // disconnect metamask wallet
  const disconnectWallet = async () => {
    try {
      deactivate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <WalletModal
        show={show}
        handleClose={handleClose}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        balance={balance}
        accInfo={accInfo}
        chainID={chainID}
        isActive={isActive}
      />
    </div>
  );
};

export default Wallet;
