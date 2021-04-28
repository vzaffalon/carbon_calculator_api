import { Request, Response } from "express";
import * as EmissionsService from "../services/emissions.service";
import { EmissionsCreation } from "../interfaces/emission/emissions.creation.interface"

async function calculateTotalEmission (req: Request, res: Response){
    try {
      const emissions: EmissionsCreation = req.body;
  
      const newItem = await EmissionsService.calculateEmissions(emissions);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
}

export {
  calculateTotalEmission,
}