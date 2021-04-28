/**
 * Required External Modules and Interfaces
 */
 import express from "express";
 import * as CategoriesController from "../controllers/categories_controller"
 import * as SubCategoriesController from "../controllers/subcategories_controller"
 import * as EmissionsController from "../controllers/emissions_controller"


/**
 * Router Definition
 */
 export const router = express.Router();

/**
 * Controller Definitions
 */
router.get("/categories/:id/subcategories", SubCategoriesController.index);
router.get("/categories", CategoriesController.index);
router.post("/calculate_total_emission", EmissionsController.calculateTotalEmission);