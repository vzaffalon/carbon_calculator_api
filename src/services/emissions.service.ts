import { Emission } from "../interfaces/emission/emission.interface";
import { EmissionsCreation } from "../interfaces/emission/emissions.creation.interface";
import * as SubcategoriesService from "./subcategories.service";
import { SubCategory } from "../interfaces/subcategory/subcategory.interface";
import { Category } from "../interfaces/category/category.interface";
import { CategoriesEmissions } from "../interfaces/emission/categories.emissions.interface";

export const calculateEmissions = async (emissions: EmissionsCreation): Promise<Emission> => {
    let total_emission: number = 0
    let total_category_emission: number = 0
    let category_emissions: CategoriesEmissions = []
    let last_category_id: number = 0
    await emissions.forEach(async (emission) => {
        let subcategory: SubCategory = await SubcategoriesService.find(emission.subcategory_id)
        let category: Category = await SubcategoriesService.find(subcategory.category_id)
        
        total_category_emission = total_category_emission + (emission.use * subcategory.ef)
        if(last_category_id != subcategory.category_id){
            category_emissions.push({
                category: category,
                total_emission: total_category_emission,
                total_emission_measure: "kg CO2e/yr"
            })
            total_emission = total_emission + total_category_emission
            total_category_emission = 0
        }else{
            total_category_emission = total_category_emission + (emission.use * subcategory.ef)
        }
        last_category_id = subcategory.category_id
    })

    console.log(total_emission)
    console.log(category_emissions)
    return {
        total_emission: total_emission,
        total_emission_measure: "kg CO2e/yr",
        categories_emissions: category_emissions
    }
}