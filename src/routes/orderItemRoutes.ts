import { Router } from "express";

import {
    createOrderItem,
    getOrderItems,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem,
} from "../controllers/orderItem.controller";
import { orderItemValidation } from "../validators/orderItem.validator";
import validate from "../middleware/validation.middleware";

const router = Router();

router.post("/", orderItemValidation, validate, createOrderItem);
router.put("/:id", orderItemValidation, validate, updateOrderItem);

router.get("/", getOrderItems);

router.get("/:id", getOrderItemById);

router.delete("/:id", deleteOrderItem);

export default router;