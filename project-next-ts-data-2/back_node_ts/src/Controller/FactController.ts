import type {Request,Response} from "express"
import DimPayment from "../models/DimPayment";
import DimFact from "../models/DimFact";
import DimCustomer from "../models/DimCustomer";
import DimCategory from "../models/DimCategory";
import DimDevice from "../models/DimDevice";
export class FactController{
    static getAll =async (req:Request,res:Response)=>{
          try {
        const take = req.query.take ? Number(req.query.take) : 10;
        const skip =req.query.skip? Number(req.query.skip): 1; 
        const {count, rows} = await DimFact.findAndCountAll({
            limit:take,
                offset:skip,
                include:[
                    {
                        model:DimCustomer
                    },
                                        {
                        model:DimCategory
                    },
                                        {
                        model:DimDevice
                    },
                                        {
                        model:DimPayment
                    }
                ]
            
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