import { CompanysSchema, LocationsSchema, SalarysSchema, type draftFact } from "../schema/schema"

export async function getSalary(){
    const url =`${import.meta.env.VITE_API_URL}/api/salary/salary-all`
    
    const req = await fetch(url)
    if(!req.ok){
        throw new Error('Issue to get data')
    }
    
    const json= await req.json()
    const result = SalarysSchema.safeParse(json)
    if(!result.success){
        throw new Error("Invalid API response")
    }
    return result.data
    

}

export async function getCompany(){
    const url =`${import.meta.env.VITE_API_URL}/api/salary/company-all`
    
    const req = await fetch(url)
    if(!req.ok){
        throw new Error('Issue to get data')
    }
    
    const json= await req.json()
    const result = CompanysSchema.safeParse(json)
    if(!result.success){
        throw new Error("Invalid API response")
    }
    return result.data

}

export async function getLocation(){
    const url =`${import.meta.env.VITE_API_URL}/api/salary/location-all`
    
    const req = await fetch(url)
    if(!req.ok){
        throw new Error('Issue to get data')
    }
    
    const json= await req.json()
    const result = LocationsSchema.safeParse(json)
    if(!result.success){
        throw new Error("Invalid API response")
    }
    return result.data

}

export async function createFact(data:draftFact){
      const url =`${import.meta.env.VITE_API_URL}/api/fact/create-fact`
      const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

      })

      if(!response.ok){
        throw new Error("Error creating fact")
      }

      return await  response.json()
}