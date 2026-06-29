import { Request, Response, NextFunction } from "express";
import Category from "../models/category.model";
import AppError from "../utils/AppError";

// Create Category
export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

// Get All Categories
export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const categories = await Category.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

// Get Category By ID
export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

// Update Category
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

// Delete Category
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};