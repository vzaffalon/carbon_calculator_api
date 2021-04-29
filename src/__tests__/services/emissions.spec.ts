import emissionMock from "../../__mocks__/emission"
import emissionCreationMock from "../../__mocks__/emissionCreation"
import * as EmissionsService from "../../services/emissions.service";
import { Emission } from "../../interfaces/emission/emission.interface";

describe('Emissions Service', () => {
    it('should return correct emissions', async done => {
        let emission: Emission = await EmissionsService.calculateEmissions(emissionCreationMock);
        expect(emission).toStrictEqual(emissionMock);
        done()
    })
})