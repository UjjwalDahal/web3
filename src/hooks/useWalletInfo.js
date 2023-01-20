import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
// import { injected } from "../utils/connector";

const useWalletInfo = () => {
  const [chainID, setChainID] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [accInfo, setAccInfo] = useState("");
  const [balance, setBalance] = useState("");

  // info from useWeb3React hook
  const { account, chainId, activate, active, library, deactivate } =
    useWeb3React();

  // get user native token balance
  const getUserBalance = async () => {
    library?.getBalance(account).then((result) => {
      setBalance(result / 1e18);
    });
  };

  // set state from fetched information from wallet
  useEffect(() => {
    if (chainId) {
      setChainID(chainId);
    }
    if (active) {
      setIsActive(active);
    }
    if (account) {
      setAccInfo(account);
      if (library?.getBalance) {
        getUserBalance();
      }
    }
  }, [chainId, account, active, library]);

  //   stay connected to the wallet
  //   useEffect(() => {
  //     injected.isAuthorized().then((isAuthorized) => {
  //       activate(injected, undefined, true);
  //     });
  //   }, [activate]);

  return {
    chainID,
    isActive,
    accInfo,
    activate,
    deactivate,
    balance,
  };
};

export default useWalletInfo;
