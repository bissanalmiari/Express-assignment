import { Request, Response, NextFunction } from "express";
import Order from "../models/order.model";
import AppError from "../utils/AppError";

// Create Order
export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

// Get All Orders
export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const orders = await Order.find()
      .populate("customer")
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

// Get Order By ID
export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findById(req.params.id).populate("customer");

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

// Update Order
export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("customer");

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

// Delete Order
export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};