"use server"
import { draftFact } from "@/schemas/schema";

export  async function createFact(data:draftFact){
    const url = `${process.env.API_URL}/fact`
    console.log(url);
    
    const req = await fetch(url,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    console.log(req);
    

    if(!req.ok){
        throw new Error("Error creating fact")
    }

    return await req.json()
}