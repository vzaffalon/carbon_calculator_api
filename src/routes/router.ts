/**
 * Required External Modules and Interfaces
 */
 import express from "express";

 import * as CategoriesController from "../controllers/categories_controller"
 import * as SubCategoriesController from "../controllers/subcategories_controller"
 import * as EmissionsController from "../controllers/emission_controller"


/**
 * Router Definition
 */
 export const router = express.Router();

/**
 * Controller Definitions
 */
// GET /CATEGORIES
router.get("/categories", CategoriesController.index);
// GET /SUBCATEGORIES
router.get("/subcategories", SubCategoriesController.index);
// POST  /emissions
router.post("/emissions", EmissionsController.create);