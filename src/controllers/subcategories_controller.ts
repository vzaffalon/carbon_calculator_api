import express, { Request, Response } from "express";
import * as SubCategoriesService from "../services/subcategories.service";
import { SubCategory } from "../interfaces/subcategory/subcategory.interface";

async function index(req: Request, res: Response) {
    try {
        const category_id: number = parseInt(req.params.id, 10);
        const subcategories: SubCategory[] = await SubCategoriesService.findByCategory(category_id);

        res.status(200).send(subcategories);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


export {
    index
}