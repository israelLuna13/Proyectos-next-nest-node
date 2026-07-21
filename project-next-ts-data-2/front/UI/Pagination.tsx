import { getPages } from "@/util";
import Link from "next/link";
type PaginationProps = { page: number; totalPages: number; baseUrl: string };
export default function Pagination({
  page,
  totalPages,
  baseUrl,
}: PaginationProps) {
  //return array with secuence numers [1,2,3,4,5]
  //const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages = getPages(page, totalPages);
  console.log(pages);
  console.log(page);
  
  

  return (
    <nav className="flex justify-center py-10">
      {page > 1 && (
        <Link
          className="px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          href={`${baseUrl}?page=${page - 1}`}
        >
          &laquo;
        </Link>
      )}

      {pages.map((currentPage, index) => {
        if (currentPage === "...") {
          return (
            <span key={index} className="px-4 py-2 text-sm text-gray-500">
              ...
            </span>
          );
        }
      return(
          <Link
          href={`${baseUrl}?page=${currentPage}`}
          key={index}
          className={` ${page === currentPage && "font-bold"} px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          {currentPage}
        </Link>
      )
      })}

      {page < totalPages && (
        <Link
          className="px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          href={`${baseUrl}?page=${page + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
