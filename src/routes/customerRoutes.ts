import { Router } from "express";

import {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
} from "../controllers/customer.controller";

import validate from "../middleware/validation.middleware";
import { customerValidation } from "../validators/customer.validator";

const router = Router();

router.post("/", customerValidation, validate, createCustomer);

router.put("/:id", customerValidation, validate, updateCustomer);

router.get("/", getCustomers);

router.get("/:id", getCustomerById);

router.delete("/:id", deleteCustomer);

export default router;