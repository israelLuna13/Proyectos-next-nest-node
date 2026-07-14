import type {Request,Response} from "express"
import DimCategory from "../models/DimCategory";
export class CategoryController{
    static getAll =async (req:Request,res:Response)=>{
          try {
        const take = req.query.take ? Number(req.query.take) : 10;
        const skip =req.query.skip? Number(req.query.skip): 1; 
        const {count, rows} = await DimCategory.findAndCountAll({
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
        const error = new Error('There is issuse')
             res.status(500).json({error:error.message})
             return
    }
    }
}