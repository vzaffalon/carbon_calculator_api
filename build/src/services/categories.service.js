"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.findAll = void 0;
const categories_store_1 = __importDefault(require("../store/categories.store"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return categories_store_1.default; });
exports.findAll = findAll;
const find = (category_id) => __awaiter(void 0, void 0, void 0, function* () { return categories_store_1.default.filter((category) => category.id === category_id)[0]; });
exports.find = find;
