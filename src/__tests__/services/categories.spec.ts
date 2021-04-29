import * as CategoriesService from "../../services/categories.service";
import { Category } from "../../interfaces/category/category.interface"
import { Categories } from "../../interfaces/category/categories.interface"
import categoriesMock from "../../__mocks__/categories";

describe('Categories Service', () => {
    it('should return categories from seed', async done => {
        let categories: Categories = await CategoriesService.findAll();
        expect(categories).toStrictEqual(categoriesMock);
        done()
    })

    it('should return first category', async done => {
        let category: Category = await CategoriesService.find(1);
        expect(category).toStrictEqual(categoriesMock[0]);
        done()
    })
})