import { Categories } from "../interfaces/categories.interface";
import { SubCategories } from "../interfaces/subcategories.interface";

let categories: Categories = [
    {
      id: 1,
      name: "Housing",
    },
    {
      id: 2,
      name: "Travel",
    },
    {
      id: 3,
      name: "Food",
    },
 ];

 let subcategories: SubCategories = [
    {
      id: 1,
      name: "Electricity",
      use: 0,
      use_measure: "kWh/yr",
      ef: 0.7,
      ef_measure: "kg CO2e/kWh",
      category_id: 1
    },
   {
     id: 2,
     name: "Natural Gas",
     use: 0,
     use_measure: "therms/yr",
     ef: 0.7,
     ef_measure: "kg CO2e/therms",
     category_id: 1
   },
   {
     id: 3,
     name: "Fuel Oil",
     use: 0,
     use_measure: "litres/yr",
     ef: 0.7,
     ef_measure: "kg CO2e/litre",
     category_id: 1
   },
   {
     id: 4,
     name: "LPG",
     use: 0,
     use_measure: "litres/yr",
     ef: 0.7,
     ef_measure: "kg CO2e/litre",
     category_id: 1
   },
   {
     id: 5,
     name: "Waste",
     use: 0,
     use_measure: "kg/week",
     ef: 0.7 * 52,
     ef_measure: "kg CO2e/kg",
     category_id: 1
   },
   {
     id: 6,
     name: "Water",
     use: 0,
     use_measure: "kg CO2e/kWh",
     ef: 0.7 * 365,
     ef_measure: "kg CO2e/kg",
     category_id: 1
   },
   {
     id: 7,
     name: "Vehicle",
     use: 0,
     use_measure: "km/yr",
     ef: 50,
     ef_measure: "kg CO2e/km",
     category_id: 2
   },
   {
     id: 8,
     name: "Bus",
     use: 0,
     use_measure: "km/yr",
     ef: 50,
     ef_measure: "kg CO2e/km",
     category_id: 2
   },
   {
     id: 9,
     name: "Metro",
     use: 0,
     use_measure: "km/yr",
     ef: 50,
     ef_measure: "kg CO2e/km",
     category_id: 2
   },
   {
     id: 10,
     name: "Taxi",
     use: 0,
     use_measure: "km/yr",
     ef: 50,
     ef_measure: "kg CO2e/km",
     category_id: 2
   },
   {
     id: 11,
     name: "Rail",
     use: 0,
     use_measure: "km/yr",
     ef: 50,
     ef_measure: "kg CO2e/km",
     category_id: 2
   },
   {
     id: 12,
     name: "Flying",
     use: 0,
     use_measure: "km/yr",
     ef: 50 * 1.09,
     ef_measure: "kg CO2e/km",
     category_id: 2
   },
   {
     id: 13,
     name: "Red Meat",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 14,
     name: "White meat",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 15,
     name: "Dairy",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 16,
     name: "Cereals",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 17,
     name: "Vegetables",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 18,
     name: "Fruit",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 19,
     name: "Oils",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 20,
     name: "Snacks",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
   {
     id: 21,
     name: "Drinks",
     use: 0,
     use_measure: "kCal/day",
     ef: 365 * 1.09,
     ef_measure: "kg CO2e/kCal",
     category_id: 3
   },
 ];

 export {
    categories,
    subcategories
 }
