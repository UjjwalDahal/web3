import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({
  controlId,
  type,
  label,
  className,
  placeholder,
  onChange,
  value,
  feedback,
  name,
  min,
}) => {
  return (
    <>
      <Form.Group controlId={controlId} className={className}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          min={min}
        ></Form.Control>
        <Form.Control.Feedback>{feedback}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default FormInput;
