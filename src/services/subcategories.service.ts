import { SubCategory } from "../interfaces/subcategory.interface";
import { SubCategories } from "../interfaces/subcategories.interface";
import SubCategoriesStore from "../store/subcategories.store";

 export const findAll = async (): Promise<SubCategory[]> => Object.values(SubCategoriesStore);

 export const find = async (id: number): Promise<SubCategory> => SubCategoriesStore[id];