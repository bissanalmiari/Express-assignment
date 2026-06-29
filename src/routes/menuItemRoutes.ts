import { Router } from "express";

import {
    createMenuItem,
    getMenuItems,
    getMenuItemById,
    updateMenuItem,
    deleteMenuItem,
} from "../controllers/menuItem.controller";
import { menuItemValidation } from "../validators/menuItem.validator";
import validate from "../middleware/validation.middleware";

const router = Router();

router.post("/", menuItemValidation, validate, createMenuItem);
router.put("/:id", menuItemValidation, validate, updateMenuItem);

router.get("/", getMenuItems);

router.get("/:id", getMenuItemById);

router.delete("/:id", deleteMenuItem);

export default router;