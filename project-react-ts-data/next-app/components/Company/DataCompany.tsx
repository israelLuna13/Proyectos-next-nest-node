import { Company } from "@/schemas/schema";
import Link from "next/link";

export default function DataCompany({companys}:{companys:Company[]}) {
   return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="mt-8 flow-root ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    headquarters
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    type ownership
                  </th>

                   <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Industry
                  </th>

                   <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Sector
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {companys.map((company) => (
                  <tr key={company.company_id}>
                
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {company.headquarters}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {/* {formatCurrency(product.price)} */}
                      {(company.type_of_ownership)}
                    </td>
                                        <td className="px-3 py-4 text-sm text-gray-500">
                      {/* {formatCurrency(product.price)} */}
                      {(company.industry)}
                    </td>

                                        <td className="px-3 py-4 text-sm text-gray-500">
                      {/* {formatCurrency(product.price)} */}
                      {(company.sector)}
                    </td>
                   
                    <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 ">
                      <div className="flex gap-5 justify-end items-center">
                        <Link
                          className="text-indigo-600 hover:text-indigo-800"
                          href={``}
                        >
                          {/* Edit <span className="sr-only">, {product.name}</span> */}
                        </Link>

                        {/* <DeleteProductForm productId={product.id} /> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
