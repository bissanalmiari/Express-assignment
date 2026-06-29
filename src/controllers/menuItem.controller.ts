import { Request, Response, NextFunction } from "express";
import MenuItem from "../models/menuItem.model";
import AppError from "../utils/AppError";

// Create Menu Item
export const createMenuItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const menuItem = await MenuItem.create(req.body);

    res.status(201).json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Get All Menu Items
export const getMenuItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const menuItems = await MenuItem.find()
      .populate("category")
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(menuItems);
  } catch (error) {
    next(error);
  }
};

// Get Menu Item By ID
export const getMenuItemById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id).populate(
      "category"
    );

    if (!menuItem) {
      throw new AppError("Menu item not found", 404);
    }

    res.status(200).json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Update Menu Item
export const updateMenuItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("category");

    if (!menuItem) {
      throw new AppError("Menu item not found", 404);
    }

    res.status(200).json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Delete Menu Item
export const deleteMenuItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);

    if (!menuItem) {
      throw new AppError("Menu item not found", 404);
    }

    res.status(200).json({
      message: "Menu item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};