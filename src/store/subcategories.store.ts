/**
 * Data Model Interfaces
 */
  import { SubCategories } from "../interfaces/subcategory/subcategories.interface";
  import { subcategories as seed } from "./seed";

 
 /**
  * In-Memory Store
  */
 
  let sub_categories: SubCategories = seed

export default sub_categories
 