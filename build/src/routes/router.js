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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/**
 * Required External Modules and Interfaces
 */
const express_1 = __importDefault(require("express"));
const CategoriesController = __importStar(require("../controllers/categories_controller"));
const SubCategoriesController = __importStar(require("../controllers/subcategories_controller"));
const EmissionsController = __importStar(require("../controllers/emissions_controller"));
/**
 * Router Definition
 */
exports.router = express_1.default.Router();
/**
 * Controller Definitions
 */
exports.router.get("/categories/:id/subcategories", SubCategoriesController.index);
exports.router.get("/categories", CategoriesController.index);
exports.router.post("/calculate_total_emission", EmissionsController.calculateTotalEmission);
