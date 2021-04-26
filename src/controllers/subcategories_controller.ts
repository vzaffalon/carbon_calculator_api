import express, { Request, Response } from "express";
import * as SubCategoriesService from "../services/subcategories.service";
import { SubCategory } from "../interfaces/subcategory.interface";

async function index(req: Request, res: Response){
    try {
        const subcategories: SubCategory[] = await SubCategoriesService.findAll();

        res.status(200).send(subcategories);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


export {
    index
}