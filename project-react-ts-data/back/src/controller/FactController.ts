import { Request, Response } from "express"
import Location from "../models/Location"
import FactJobs from "../models/FactJobs"
import Company from "../models/Company"
import Salary from "../models/Salary"

export class Factontroller{
    static getAll= async(req:Request, res:Response)=>{
        try {
             const take = req.query.take ? Number(req.query.take) : 10;
            const skip =req.query.skip? Number(req.query.skip): 1; 
            const {count, rows}= await FactJobs.findAndCountAll({
                 limit:take,
                offset:skip,
                include:[
                    {
                        model:Company
                    },
                    {
                        model:Location
                    },
                    {
                        model:Salary
                    }
                ]
            })
            if(count === 0){
                const error= new Error('There are not data')
                res.status(404).json({error:error.message})
                return
            }
            res.json({data:rows, total:count})
        } catch (e) {
            //console.log(e);
            const error= new Error('There is issue')
                res.status(500).json({error:error.message})
                return
        }

    }

    static create= async(req:Request, res:Response)=>{
       try {
         const {
          job_title,
          rating,
          founded,
          revenue,
          company_id,
          location_id,
          salary_id,
        } = req.body;
        const companyExist = await Company.findByPk(company_id);
        
        if (!companyExist) {
          const error = new Error("The company do not exist");
          res.status(409).json({ error: error.message });
          return;
        }

        const salaryExist = await Salary.findByPk(salary_id);
        
        if (!salaryExist) {
          const error = new Error("The salary do not exist");
          res.status(409).json({ error: error.message });
          return;
        }

        const locationExist = await Location.findByPk(location_id);
        if (!locationExist) {
          const error = new Error("The location do not exist");
          res.status(409).json({ error: error.message });
          return;
        }

        const fact= await FactJobs.create(req.body)
        await fact.save()
        res.status(201).json("Fact created successfully")
        

       } catch (e) {
         console.log(e);
            const error= new Error('There is issue')
                res.status(500).json({error:error.message})
                return
       }
        
    }
}