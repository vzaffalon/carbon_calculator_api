import request from 'supertest'
import {Express} from 'express-serve-static-core'
import Categories from "../../__mocks__/categories";
import startServer from "../../../index";

let app: Express

beforeAll(async () => {
    startServer(app)
})

describe('GET /categories', () => {
  it('should return 200 and categories list', async done => {
    request(app)
      .get(`/api/categories`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toStrictEqual(Categories)
        done()
      })
  })
})