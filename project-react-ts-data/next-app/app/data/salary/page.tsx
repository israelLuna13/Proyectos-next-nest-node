import DataSalarys from "@/components/Salary/DataSalarys";
import { getSalary } from "@/servers/get"
import Heading from "@/UI/Heading";
import Pagination from "@/UI/Pagination";
import { isValidPage } from "@/utils/utils";
import { redirect } from "next/navigation"

type SearchParams= Promise<{page:string}>
export  default async function page({searchParams}:{searchParams:SearchParams}) {
  const {page} = await searchParams;
   if(!isValidPage(+page)) redirect("/data/salary?page=1")
  const dataPerPage = 10;
    const skip = (+page - 1) * dataPerPage;
      // const  {salesCountry,total} = await getSalesCountry(dataPerPage, skip);
  //  try {
  //       const {salary,total} = await getSalary(dataPerPage,skip)
  //       console.log(salary);
        
  //       const totalPages = Math.ceil(total / dataPerPage);

  //   } catch (error) {
  //       console.log(error);
  //       notFound()
  //   }
  const {salary,total} = await getSalary(dataPerPage,skip)
        
  const totalPages = Math.ceil(total / dataPerPage);
      
  return (
    <>
    <Heading> Salarys</Heading>
    <DataSalarys salarys={salary}/>
    <Pagination page={+page} totalPages={totalPages} baseUrl="/data/salary"/>
    </>
  )
}
