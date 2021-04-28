import { Category } from "../interfaces/category/category.interface";
import CategoriesStore from "../store/categories.store";

 export const findAll = async (): Promise<Category[]> => CategoriesStore;

 export const find = async (category_id: number): Promise<Category> => CategoriesStore.filter((category) => category.id === category_id)[0];