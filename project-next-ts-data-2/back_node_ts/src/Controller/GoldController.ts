import type { Request, Response } from "express";
import GoldCategory from "../models/GoldCategory";
import GoldCityRank from "../models/GoldCityRank";
import GoldCustomerAvg from "../models/GoldCustomerAvg";

export class GoldController {
  static getGoldCategory = async (req: Request, res: Response) => {
    try {
        const take = req.query.take ? Number(req.query.take) : 10;
        const skip =req.query.skip? Number(req.query.skip): 1; 
        const {count, rows} = await GoldCategory.findAndCountAll({
            limit:take,
                offset:skip
        })
        if(count === 0){
            const error = new Error('There are not data')
            res.status(404).json({error:error.message})
            return
        }
        res.json({data:rows, total:count})
    } catch (e) {
      console.log(e);
      const error = new Error("There is issuse");
      res.status(500).json({ error: error.message });
      return;
    }
  };

   static getGoldCity = async (req: Request, res: Response) => {
    try {
        const take = req.query.take ? Number(req.query.take) : 10;
        const skip =req.query.skip? Number(req.query.skip): 1; 
        const {count, rows} = await GoldCityRank.findAndCountAll({
            limit:take,
                offset:skip
        })
        if(count === 0){
            const error = new Error('There are not data')
            res.status(404).json({error:error.message})
            return
        }
        res.json({data:rows, total:count})
    } catch (e) {
      console.log(e);
      const error = new Error("There is issuse");
      res.status(500).json({ error: error.message });
      return;
    }
  };

   static getGoldCustomers = async (req: Request, res: Response) => {
    try {
        const take = req.query.take ? Number(req.query.take) : 10;
        const skip =req.query.skip? Number(req.query.skip): 1; 
        const {count, rows} = await GoldCustomerAvg.findAndCountAll({
            limit:take,
                offset:skip
        })
        if(count === 0){
            const error = new Error('There are not data')
            res.status(404).json({error:error.message})
            return
        }
        res.json({data:rows, total:count})
    } catch (e) {
      //console.log(e);
      const error = new Error("There is issuse");
      res.status(500).json({ error: error.message });
      return;
    }
  };
}
