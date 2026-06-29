import { body } from "express-validator";

export const orderValidation = [
  body("customer")
    .notEmpty()
    .withMessage("Customer is required"),

  body("totalAmount")
    .isFloat({ min: 0 })
    .withMessage("Total amount must be positive"),
];