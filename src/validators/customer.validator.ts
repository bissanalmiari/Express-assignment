import { body } from "express-validator";

export const customerValidation = [
  body("customerName")
    .notEmpty()
    .withMessage("Customer name is required"),

  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .withMessage("Phone number must contain only numbers"),

  body("address")
    .notEmpty()
    .withMessage("Address is required"),
];