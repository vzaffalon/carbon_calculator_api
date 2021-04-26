import { Request, Response } from "express";
import * as EmissionsService from "../services/emissions.service";
import { Emissions } from "../interfaces/emissions.interface"

async function create (req: Request, res: Response){
    try {
      const emissions: Emissions = req.body;
  
      const newItem = await EmissionsService.create(emissions);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
}

export {
    create
}