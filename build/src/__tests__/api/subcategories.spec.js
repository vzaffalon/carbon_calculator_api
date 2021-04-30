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
const supertest_1 = __importDefault(require("supertest"));
const subcategories_1 = __importDefault(require("../../__mocks__/subcategories"));
const index_1 = __importDefault(require("../../../index"));
let app;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    index_1.default(app);
}));
describe('GET /subcategories', () => {
    it('should return 200 and subcategories list', (done) => __awaiter(void 0, void 0, void 0, function* () {
        supertest_1.default(app)
            .get(`/api/categories/${1}/subcategories`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body).toStrictEqual(subcategories_1.default);
            done();
        });
    }));
});
