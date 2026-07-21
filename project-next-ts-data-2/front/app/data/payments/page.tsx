import DataPayments from '@/components/data/DataPayments';
import { PaymentsSchemas } from '@/schemas';
import Heading from '@/UI/Heading';
import Pagination from '@/UI/Pagination';
import { isValidPage } from '@/util';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
async function getPayments(take:number, skip:number){
    const url =  `${process.env.API_URL}/api/data/payments?take=${take}&skip=${skip}`;
    const req = await fetch(url)
    const json= await req.json()
    if(!req.ok) notFound()
        
    const result = PaymentsSchemas.safeParse(json)
    if(!result.success){
        throw new Error("Invalid API response")
    }

    return{
        data: result.data.data,
        total: result.data.total
    }
}

type SearchParams = Promise<{page:string}>
export default async function page({searchParams}:{searchParams:SearchParams}) {
    const {page} = await searchParams
    if(!isValidPage(+page)) redirect("/data/payments?page=1")
    const dataPerPage=10
const  skip = (+page-1) * dataPerPage
const {data, total} = await getPayments(dataPerPage, skip)
const totalPages = Math.ceil(total/dataPerPage)
  return (
    <>
    <Heading>Payments</Heading>
    <DataPayments payments={data}/>
    <Pagination page={+page} totalPages={totalPages} baseUrl='/data/payments'/>

      
    </>
  )
}
