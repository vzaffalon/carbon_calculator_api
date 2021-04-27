export interface BaseEmissionCreation {
    subcategory_id: number
    use: number
}
  
export interface EmissionCreation extends BaseEmissionCreation {
    id: number;
}