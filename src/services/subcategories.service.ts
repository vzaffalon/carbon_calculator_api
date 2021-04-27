import { SubCategory } from "../interfaces/subcategory/subcategory.interface";
import { SubCategories } from "../interfaces/subcategory/subcategories.interface";
import SubCategoriesStore from "../store/subcategories.store";

 export const findAll = async (): Promise<SubCategory[]> => SubCategoriesStore;

 export const findByCategory = async (category_id: number): Promise<SubCategory[]> => SubCategoriesStore.filter((subcategories) => subcategories.category_id === category_id );

 export const find = async (id: number): Promise<SubCategory> => SubCategoriesStore.filter((subcategory) => subcategory.id === id)[0];