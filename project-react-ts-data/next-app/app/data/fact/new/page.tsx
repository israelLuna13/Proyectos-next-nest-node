import AddFactForm from '@/components/fact/AddFactForm'
import FormFact from '@/components/fact/FormFact'
import { getCompany, getLocation, getSalary } from '@/servers/get'
import React from 'react'

export default async function page() {
    const {salary} = await getSalary(10,1)
    const {company} = await getCompany(10,1)
    const {location} = await getLocation(10,1)
    
  return (
    <div>
        <AddFactForm>
            <FormFact salarys={salary}  companys={company} locations={location}/>
        </AddFactForm>
      
    </div>
  )
}
