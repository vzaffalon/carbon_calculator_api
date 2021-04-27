import express, { Request, Response } from "express";
import * as CategoriesService from "../services/categories.service";
import { Category } from "../interfaces/category/category.interface";

async function index(req: Request, res: Response) {
    try {
        const categories: Category[] = await CategoriesService.findAll();
        
        res.status(200).send(categories);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


export {
    index
}