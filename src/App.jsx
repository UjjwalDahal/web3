import React, { useState } from "react";
import Converter from "./pages/Converter";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Wallet from "./pages/Wallet";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Wallet show={show} handleClose={handleClose} />
      <Converter handleShow={handleShow} />
    </Web3ReactProvider>
  );
};

export default App;
