import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormInput from "../../components/FormInput";

const Converter = ({ handleShow }) => {
  const [amount, setAmount] = useState(1);
  const [amountNPR, setAmountNPR] = useState(true);

  let nprAmount, busdAmount;
  let BUSD = 3;
  if (amountNPR) {
    // setting BUSD from NPR i.e 1 NPR = 3 BUSD
    nprAmount = amount;
    busdAmount = parseFloat(amount * BUSD).toFixed(2);
  } else {
    busdAmount = amount;
    nprAmount = parseFloat(amount / BUSD).toFixed(2);
  }

  //  handle NPR change
  const handleNPRChange = (e) => {
    const { value } = e.target;
    setAmount(value);
    setAmountNPR(true);
  };
  // handle BUSD change
  const handleBUSDChange = (e) => {
    const { value } = e.target;
    setAmount(value);
    setAmountNPR(false);
  };

  return (
    <div className="converter_wrapper">
      <div className="conveter_form">
        <div className="converter_heading">
          <h3>Currency Converter</h3>
        </div>
        <Form>
          {/* input for npr */}
          <FormInput
            type="number"
            min="0"
            label="NPR"
            className="currency_form"
            value={nprAmount}
            controlId="NPR"
            onChange={handleNPRChange}
            name="npr"
            placeholder="0.00"
          />
          {/* input for busd */}
          <FormInput
            type="number"
            min="0"
            label="BUSD"
            className="currency_form"
            value={busdAmount}
            controlId="BUSD"
            onChange={handleBUSDChange}
            name="busd"
            placeholder="0.00"
          />
        </Form>

        <Button variant="primary" onClick={handleShow}>
          Connect to Wallet
        </Button>
      </div>
      {/* end conveter_form */}
    </div>
    // end converter_wrapper
  );
};

export default Converter;
