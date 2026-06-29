import { Router } from "express";

import {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from "../controllers/category.controller";
import validate from "../middleware/validation.middleware";
import { categoryValidation } from "../validators/category.validator";

const router = Router();

router.post("/", categoryValidation, validate, createCategory);
router.put("/:id", categoryValidation, validate, updateCategory);

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.delete("/:id", deleteCategory);

export default router;