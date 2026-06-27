import AddFactForm from '@/components/fact/AddFactForm'
import FormFact from '@/components/fact/FormFact'
import { getCompany, getLocation, getSalary } from '@/servers/get'
import React from 'react'

export default async function page() {
    const salarys = await getSalary()
    const companys = await getCompany()
    const locations = await getLocation()
    
  return (
    <div>
        <AddFactForm>
            <FormFact salarys={salarys}  companys={companys} locations={locations}/>
        </AddFactForm>
      
    </div>
  )
}
