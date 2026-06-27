import { useEffect, useState } from "react"
import type { Company } from "../schema/schema"
import { getCompany } from "../server/server"

export default function DataCompany() {
  const [data, setData]=useState<Company[]>([])
  const [error, setError]=useState("")
useEffect(()=>{
  async function loadData(){
    try {
      const result=await getCompany()
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
        {error}
      company
    </div>
  )
}
