import DataFacts from '@/components/data/DataFact';
import { FactsSchemas } from '@/schemas';
import Heading from '@/UI/Heading';
import Pagination from '@/UI/Pagination';
import { isValidPage } from '@/util';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
async function getFacts(take: number, skip: number) {
  const url = `${process.env.API_URL}/api/data/facts?take=${take}&skip=${skip}`;
  const req = await fetch(url);
  const json = await req.json();
  console.log(json);
  console.log("-------------");
  
  
  if (!req.ok) notFound();
  const result = FactsSchemas.safeParse(json);
console.log(result);

  if (!result.success) {
    throw new Error("Invalid API response");
  }
  return {
    data: result.data.data,
    total: result.data.total,
  };
}
type SearchParams = Promise<{ page: string }>;

export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
      const { page } = await searchParams;
      if (!isValidPage(+page)) redirect("/data/facts?page=1");
      const dataPerPage=20
      const skip=(+page - 1) * dataPerPage
      const { data, total } = await getFacts(dataPerPage,skip);
      const totalPages = Math.ceil(total/dataPerPage)
    
  return (
    <>
    <Heading>Facts</Heading>
    <DataFacts dataFacts={data}/>
    <Pagination page={+page} totalPages={totalPages} baseUrl='/data/facts'/>
      
    </>
  )
}
