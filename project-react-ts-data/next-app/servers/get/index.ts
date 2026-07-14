import { CompanysSchema, LocationsSchema, SalarysSchema } from "@/schemas/schema"

export async function getSalary(take:number, skip:number){
const url = `${process.env.API_URL}/salary?take=${take}&skip=${skip}`
//http://localhost:3000/salary?take=20&skip=1
const req = await fetch(url)
console.log(req);

if(!req.ok){
    throw new Error("Error getting facts")
}
const json = await req.json()
console.log(json);


const result = SalarysSchema.safeParse(json)

  if(!result.success){
        throw new Error("Invalid API response")
    }
    return {
        salary:result.data.data,
        total:result.data.total
    }
}

export async function getLocation(take:number, skip:number){
const url = `${process.env.API_URL}/location?take=${take}&skip=${skip}`
const req = await fetch(url)

if(!req.ok){
    throw new Error("Error getting facts")
}
const json = await req.json()
console.log(json);

const result = LocationsSchema.safeParse(json)
console.log(result);

  if(!result.success){
        throw new Error("Invalid API response")
    }
     return {
        location:result.data.data,
        total:result.data.total
    }
}

export async function getCompany(take:number, skip:number){
const url = `${process.env.API_URL}/company?take=${take}&skip=${skip}`
const req = await fetch(url)

if(!req.ok){
    throw new Error("Error getting facts")
}
const json = await req.json()
const result = CompanysSchema.safeParse(json)

  if(!result.success){
        throw new Error("Invalid API response")
    }
     return {
        company:result.data.data,
        total:result.data.total
    }
}