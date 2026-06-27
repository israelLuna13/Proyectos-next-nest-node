import { CompanysSchema, LocationsSchema, SalarysSchema } from "@/schemas/schema"

export async function getSalary(){
const url = `${process.env.API_URL}/api/salary/salary-all`
const req = await fetch(url)

if(!req.ok){
    throw new Error("Error getting facts")
}
const json = await req.json()
const result = SalarysSchema.safeParse(json)
  if(!result.success){
        throw new Error("Invalid API response")
    }
    return result.data
}

export async function getLocation(){
const url = `${process.env.API_URL}/api/location/location-all`
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
    return result.data
}

export async function getCompany(){
const url = `${process.env.API_URL}/api/company/company-all`
const req = await fetch(url)

if(!req.ok){
    throw new Error("Error getting facts")
}
const json = await req.json()
const result = CompanysSchema.safeParse(json)

  if(!result.success){
        throw new Error("Invalid API response")
    }
    return result.data
}