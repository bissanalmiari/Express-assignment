import { body } from "express-validator";

export const orderItemValidation = [
  body("order")
    .notEmpty()
    .withMessage("Order is required"),

  body("item")
    .notEmpty()
    .withMessage("Menu item is required"),

  body("quantity")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),

  body("unitPrice")
    .isFloat({ min: 0 })
    .withMessage("Unit price must be positive"),
];