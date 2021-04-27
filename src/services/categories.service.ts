import { Category } from "../interfaces/category/category.interface";
import CategoriesStore from "../store/categories.store";

 export const findAll = async (): Promise<Category[]> => CategoriesStore;

 export const find = async (id: number): Promise<Category> => CategoriesStore[id];