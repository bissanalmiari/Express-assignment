import { Router } from "express";

import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
} from "../controllers/order.controller";
import { orderValidation } from "../validators/order.validator";
import validate from "../middleware/validation.middleware";

const router = Router();

router.post("/", orderValidation, validate, createOrder);
router.put("/:id", orderValidation, validate, updateOrder);

router.get("/", getOrders);

router.get("/:id", getOrderById);

router.delete("/:id", deleteOrder);

export default router;