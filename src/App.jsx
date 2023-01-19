import React, { useState } from "react";
import WalletModal from "./components/WalletModal";
import Converter from "./pages/Converter";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletModal show={show} handleClose={handleClose} />
      <Converter handleShow={handleShow} />
    </Web3ReactProvider>
  );
};

export default App;
