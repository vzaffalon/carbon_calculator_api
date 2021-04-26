/**
 * Data Model Interfaces
 */
 import { SubCategory } from "../interfaces/subcategory.interface";
 import { SubCategories } from "../interfaces/subcategories.interface";
 
 
 /**
  * In-Memory Store
  */
 
  let sub_categories: SubCategories = {
     1: {
       id: 1,
       use: 
     },
     2: {
       id: 2,
       name: "Travel",
     },
     3: {
       id: 3,
       name: "Food",
     },
     4: {
         id: 4,
         name: "Products",
     },
     5: {
         id: 5,
         name: "Services",
     }
   };

export default sub_categories
 