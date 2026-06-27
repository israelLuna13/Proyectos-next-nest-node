import { getSalary } from "@/servers/get"
import { notFound } from "next/navigation"


export  default async function page() {
    try {
        const salarys = await getSalary()
        console.log(salarys);
        
    } catch (error) {
        console.log(error);
        
        notFound()
    }
  return (
    <div>
      <h1 className="bg-black">Salary</h1>
    </div>
  )
}
