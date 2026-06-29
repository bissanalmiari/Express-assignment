import { Request, Response, NextFunction } from "express";
import OrderItem from "../models/orderItem.model";
import AppError from "../utils/AppError";

// Create Order Item
export const createOrderItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItem = await OrderItem.create(req.body);

    res.status(201).json(orderItem);
  } catch (error) {
    next(error);
  }
};

// Get All Order Items
export const getOrderItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const orderItems = await OrderItem.find()
      .populate("order")
      .populate("item")
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(orderItems);
  } catch (error) {
    next(error);
  }
};

// Get Order Item By ID
export const getOrderItemById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id)
      .populate("order")
      .populate("item");

    if (!orderItem) {
      throw new AppError("Order item not found", 404);
    }

    res.status(200).json(orderItem);
  } catch (error) {
    next(error);
  }
};

// Update Order Item
export const updateOrderItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItem = await OrderItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("order")
      .populate("item");

    if (!orderItem) {
      throw new AppError("Order item not found", 404);
    }

    res.status(200).json(orderItem);
  } catch (error) {
    next(error);
  }
};

// Delete Order Item
export const deleteOrderItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItem = await OrderItem.findByIdAndDelete(req.params.id);

    if (!orderItem) {
      throw new AppError("Order item not found", 404);
    }

    res.status(200).json({
      message: "Order item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};