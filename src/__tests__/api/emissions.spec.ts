import request from 'supertest';
import { Express } from 'express-serve-static-core';
import startServer from "../../../index";
import emissionCreation from '../../__mocks__/emissionCreation';
import emission from '../../__mocks__/emission';

let app: Express

beforeAll(async () => {
    startServer(app)
})

describe('POST /calculate_total_emission', () => {
  it('should return 200 and emission', async done => {
    request(app)
      .post(`/api/calculate_total_emission`)
      .send(emissionCreation)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toStrictEqual(emission)
        done()
      })
  })
})