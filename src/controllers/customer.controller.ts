import { Request, Response, NextFunction } from "express";
import Customer from "../models/customer.model";
import AppError from "../utils/AppError";

// Create Customer
export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await Customer.create(req.body);

    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
};

// Get All Customers
export const getCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const customers = await Customer.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};

// Get Customer By Id
export const getCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      throw new AppError("Customer not found", 404);
    }

    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

// Update Customer
export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!customer) {
      throw new AppError("Customer not found", 404);
    }

    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

// Delete Customer
export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if (!customer) {
      throw new AppError("Customer not found", 404);
    }

    res.status(200).json({
      message: "Customer deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};