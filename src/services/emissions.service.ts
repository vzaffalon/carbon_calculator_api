import { Emission } from "../interfaces/emission/emission.interface";
import { EmissionsCreation } from "../interfaces/emission/emissions.creation.interface";
import * as SubcategoriesService from "./subcategories.service";
import * as CategoriesService from "./categories.service";
import { SubCategory } from "../interfaces/subcategory/subcategory.interface";
import { Category } from "../interfaces/category/category.interface";
import { CategoriesEmissions } from "../interfaces/emission/categories.emissions.interface";
import { CategoryEmission } from "../interfaces/emission/category.emission.interface";

export const calculateEmissions = async (emissions: EmissionsCreation): Promise<Emission> => {
    let total_emission: number = 0
    let total_category_emission: number = 0
    let category_emissions: CategoriesEmissions = []
    let last_category_emission: CategoryEmission = null as any

    await Promise.all(emissions.map(async (emission) => {
        let subcategory: SubCategory = await SubcategoriesService.find(emission.subcategory_id)
        let category: Category = await CategoriesService.find(subcategory.category_id)

        total_category_emission = total_category_emission + (emission.use * subcategory.ef)
        const category_changed = last_category_emission && last_category_emission.category && (last_category_emission.category.id != subcategory.category_id)

        if (category_changed) {
            category_emissions.push(last_category_emission)
            total_emission = total_emission + total_category_emission
            total_category_emission = 0
        } else {
            total_category_emission = total_category_emission + (emission.use * subcategory.ef)
        }

        last_category_emission = {
            category: category,
            total_emission: total_category_emission,
            total_emission_measure: "kg CO2e/yr"
        }
    }))

    total_emission = total_emission + total_category_emission
    category_emissions.push(last_category_emission)

    return {
        total_emission: total_emission,
        total_emission_measure: "kg CO2e/yr",
        categories_emissions: category_emissions
    }
}