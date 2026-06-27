import { useEffect, useState } from "react"
import { getSalary } from "../server/server"
import type { Salary } from "../schema/schema"


export default function DataSalary() {
  const [data, setData]=useState<Salary[]>([])
  const [error, setError]=useState("")
useEffect(()=>{
  async function loadData(){
    try {
      const result=await getSalary()
    setData(result.data)
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unknown error"
      )
      
    }
  }
  loadData()
},[])
console.log(data);

  return (
    <div>
      {error && 'Message error parse API'}
      Salary
    </div>
  )
}
