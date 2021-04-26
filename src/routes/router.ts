/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as CategoriesService from "../services/categories.service";
 import { BaseCategory, Category } from "../services/category.interface";

 import { index } from "../controllers/categories_controller"
 import { index } from "../controllers/emission_controller"


/**
 * Router Definition
 */
 export const router = express.Router();

/**
 * Controller Definitions
 */


// GET /CATEGORIES
router.get("/", async (req: Request, res: Response) => {
    try {
      const items: Item[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
});


// GET CATEGORIES/:ID/SUBCATEGORIES
router.get("/:id", );

// POST  /emissions
router.post("/", async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;
  
      const newItem = await ItemService.create(item);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
});