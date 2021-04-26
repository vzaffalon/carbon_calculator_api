import { Category } from "../interfaces/category.interface";
import { Categories } from "../interfaces/categories.interface";
import CategoriesStore from "../store/categories.store";

 export const findAll = async (): Promise<Category[]> => Object.values(CategoriesStore);

 export const find = async (id: number): Promise<Category> => CategoriesStore[id];