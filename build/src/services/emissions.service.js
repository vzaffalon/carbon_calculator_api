"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateEmissions = void 0;
const SubcategoriesService = __importStar(require("./subcategories.service"));
const CategoriesService = __importStar(require("./categories.service"));
const calculateEmissions = (emissions) => __awaiter(void 0, void 0, void 0, function* () {
    let total_emission = 0;
    let total_category_emission = 0;
    let category_emissions = [];
    let last_category_emission = null;
    yield Promise.all(emissions.map((emission) => __awaiter(void 0, void 0, void 0, function* () {
        let subcategory = yield SubcategoriesService.find(emission.subcategory_id);
        let category = yield CategoriesService.find(subcategory.category_id);
        total_category_emission = total_category_emission + (emission.use * subcategory.ef);
        const category_changed = last_category_emission && last_category_emission.category && (last_category_emission.category.id != subcategory.category_id);
        if (category_changed) {
            category_emissions.push(last_category_emission);
            total_emission = total_emission + total_category_emission;
            total_category_emission = (emission.use * subcategory.ef);
        }
        else {
            total_category_emission = total_category_emission + (emission.use * subcategory.ef);
        }
        last_category_emission = {
            category: category,
            total_emission: total_category_emission,
            total_emission_measure: "kg CO2e/yr"
        };
    })));
    total_emission = total_emission + total_category_emission;
    category_emissions.push(last_category_emission);
    return {
        total_emission: total_emission,
        total_emission_measure: "kg CO2e/yr",
        categories_emissions: category_emissions
    };
});
exports.calculateEmissions = calculateEmissions;
