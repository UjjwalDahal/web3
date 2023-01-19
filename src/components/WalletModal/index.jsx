import React from "react";
import { Modal, Button } from "react-bootstrap";

const WalletModal = ({
  show,
  handleClose,
  connectWallet,
  disconnectWallet,
  balance,
  accInfo,
  chainID,
  isActive,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Wallet Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isActive ? (
            <>Please connect to MetaMask</>
          ) : (
            <>
              <div className="wallet_modal">
                <div className="wallet_row">
                  <p>Account Information:</p>
                  <p>{String(accInfo).substring(0, 9)}</p>
                </div>
                <div className="wallet_row">
                  <p>Chain ID:</p>
                  <p>{chainID}</p>
                </div>
                <div className="wallet_row">
                  <p>Balance:</p>
                  <p>{balance || "-"}</p>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {isActive ? (
            <Button variant="danger" onClick={disconnectWallet}>
              Disconnect
            </Button>
          ) : (
            <Button variant="primary" onClick={connectWallet}>
              Connect
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WalletModal;
