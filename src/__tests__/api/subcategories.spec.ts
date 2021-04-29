import request from 'supertest'
import {Express} from 'express-serve-static-core'
import SubCategories from "../../__mocks__/subcategories";
import startServer from "../../../index";

let app: Express

beforeAll(async () => {
    startServer(app)
})

describe('GET /subcategories', () => {
  it('should return 200 and subcategories list', async done => {
    request(app)
      .get(`/api/categories/${1}/subcategories`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toStrictEqual(SubCategories)
        done()
      })
  })
})