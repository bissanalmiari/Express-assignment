import { body } from "express-validator";

export const categoryValidation = [
  body("categoryName")
    .notEmpty()
    .withMessage("Category name is required")
    .isString()
    .withMessage("Category name must be a string")
    .isLength({ min: 2, max: 50 })
    .withMessage("Category name must be between 2 and 50 characters"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string")
    .isLength({ max: 200 })
    .withMessage("Description cannot exceed 200 characters"),
];