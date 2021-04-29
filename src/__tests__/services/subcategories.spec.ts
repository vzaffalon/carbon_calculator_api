import * as SubcategoriesService from "../../services/subcategories.service";
import { SubCategory } from "../../interfaces/subcategory/subcategory.interface"
import { SubCategories } from "../../interfaces/subcategory/subcategories.interface"
import subcategoriesMock from "../../__mocks__/subcategories";

describe('Subcategories Service', () => {
    it('should return subcategories from seed', async done => {
        let subcategories: SubCategories = await SubcategoriesService.findAll();
        expect(subcategories).toStrictEqual(subcategoriesMock);
        done()
    })

    it('should return first subcategory', async done => {
        let subcategory: SubCategory = await SubcategoriesService.find(1);
        expect(subcategory).toStrictEqual(subcategoriesMock[0]);
        done()
    })
})