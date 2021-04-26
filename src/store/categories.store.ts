/**
 * Data Model Interfaces
 */
 import { Category } from "../interfaces/category.interface";
 import { Categories } from "../interfaces/categories.interface";


/**
 * In-Memory Store
 */

 let categories: Categories = {
    1: {
      id: 1,
      name: "Housing",
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

export default categories
