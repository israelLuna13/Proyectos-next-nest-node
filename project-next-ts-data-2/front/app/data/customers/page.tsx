import DataCustomers from "@/components/data/DataCustomers";
import { CustomersSchemas } from "@/schemas";
import Heading from "@/UI/Heading";
import Pagination from "@/UI/Pagination";
import { isValidPage } from "@/util";
import { notFound, redirect } from "next/navigation";

async function getCustomers(take: number, skip: number) {
  const url = `${process.env.API_URL}/api/data/customers?take=${take}&skip=${skip}`;
  const req = await fetch(url);
  const json = await req.json();
  if (!req.ok) notFound();
  const result = CustomersSchemas.safeParse(json);

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
  if (!isValidPage(+page)) redirect("/data/customers?page=1");
  const dataPerPage=150
  const skip=(+page - 1) * dataPerPage
  const { data, total } = await getCustomers(dataPerPage,skip);
  const totalPages = Math.ceil(total/dataPerPage)

  return(
    <>
    <Heading>Customers</Heading>
    <DataCustomers customers={data}/>
    <Pagination page={+page} totalPages={totalPages} baseUrl="/data/customers"/>
    </>
  )
}
