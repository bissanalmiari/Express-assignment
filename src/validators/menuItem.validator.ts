import { body } from "express-validator";

export const menuItemValidation = [
  body("itemName")
    .notEmpty()
    .withMessage("Item name is required"),

  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("isAvailable")
    .optional()
    .isBoolean()
    .withMessage("isAvailable must be true or false"),
];