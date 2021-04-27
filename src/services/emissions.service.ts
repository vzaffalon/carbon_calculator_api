import { Emissions } from "../interfaces/emission/emissions.interface";
import { EmissionsCreation } from "../interfaces/emission/emissions.creation.interface";
import * as SubcategoriesService from "./subcategories.service";
import { SubCategory } from "../interfaces/subcategory/subcategory.interface";

export const calculateEmissions = async (emissions: EmissionsCreation): Promise<Emissions> => {
    let total: number = 0
    emissions.forEach((emission) => {
        let subcategory: SubCategory = SubcategoriesService.find(emission.subcategory_id)
        emissions = total + (emission.use * subcategory.ef)
    })

    return {
        id: 1,
        total_emission: emissions,
        total_emission_measure: "kg CO2e/yr"
    }
}