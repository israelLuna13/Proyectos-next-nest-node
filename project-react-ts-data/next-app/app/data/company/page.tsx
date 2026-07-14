import DataCompany from '@/components/Company/DataCompany';
import { getCompany } from '@/servers/get'
import Heading from '@/UI/Heading';
import Pagination from '@/UI/Pagination';
import { isValidPage } from '@/utils/utils';
import {  redirect } from 'next/navigation';
import React from 'react'
type SearchParams= Promise<{page:string}>

export default async function page({searchParams}:{searchParams:SearchParams}) {
  const {page} = await searchParams;
     if(!isValidPage(+page)) redirect("/data/company?page=1")
    const dataPerPage = 10;
    const skip = (+page - 1) * dataPerPage;
    const {company,total} = await getCompany(dataPerPage,skip)
            
      const totalPages = Math.ceil(total / dataPerPage);
    // try {
    //     const result = await getCompany()
    //     console.log(result);
        
    // } catch (error) {
    //     console.log(error);
    //     notFound()
        
    // }
  return (
    <>
    <Heading>Companys</Heading>
    <DataCompany companys={company}/>
    <Pagination page={+page} totalPages={totalPages} baseUrl="/data/company"/>

      
    </>
  )
}
