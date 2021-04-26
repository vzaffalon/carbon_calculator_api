import express, { Request, Response } from "express";
import * as SubCategoriesService from "../services/subcategories.service";
import { SubCategory } from "../interfaces/subcategory.interface";

async function index(req: Request, res: Response){
    try {
        const category_id: number = parseInt(req.params.category_id, 0);
        const subcategories: SubCategory[] = await SubCategoriesService.findAll(category_id);

        res.status(200).send(subcategories);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


export {
    index
}