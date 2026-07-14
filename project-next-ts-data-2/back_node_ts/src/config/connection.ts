import { db } from "./db";

export async function connectionDB(){
    try {
        await db.authenticate()
        console.log(`Database is working`);
        
    } catch (error) {
            console.log(error)
    console.log(`Failed connection to database`);
    
    }
}