import DataCategorys from "@/components/data/DataCategorys";
import { CategoryssSchemas } from "@/schemas";
import Heading from "@/UI/Heading";
import Pagination from "@/UI/Pagination";
import { isValidPage } from "@/util";
import { notFound, redirect } from "next/navigation";

async function getCategorys(take: number, skip: number) {
  const url = `${process.env.API_URL}/api/data/categorys?take=${take}&skip=${skip}`;
  const req = await fetch(url);
  const json = await req.json();
  if (!req.ok) notFound();
  const result = CategoryssSchemas.safeParse(json);

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
  if (!isValidPage(+page)) redirect("/data/categorys?page=1");
  const dataPerPage=20
  const skip=(+page - 1) * dataPerPage
  const { data, total } = await getCategorys(dataPerPage,skip);
  const totalPages = Math.ceil(total/dataPerPage)

  return(
    <>
    <Heading>Categorys</Heading>
    <DataCategorys categorys={data}/>
    <Pagination page={+page} totalPages={totalPages} baseUrl="/data/categorys"/>
    </>
  )
}
