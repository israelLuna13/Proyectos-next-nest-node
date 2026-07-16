// import { formatCurrency, getImagePath, isAvailable } from "@/src/utils"
// import Image from "next/image"
import { Customer } from "@/schemas";
import Link from "next/link"
// import DeleteProductForm from "./DeleteProductForm";
// const formattedDate = format(date?.toString() || new Date(), "yyyy-MM-dd");
export default function DataCustomers({customers}:{customers:Customer[]}) {
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
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Age
                  </th>

                   <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Gender
                  </th>
                   <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    City
                  </th>

                   <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Is Returnig Customer
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.customer_id}>
                
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {customer.customer_id}
                    </td>

                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {customer.age}
                    </td>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {customer.gender}
                    </td>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {customer.city}
                    </td>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {customer.is_returning_customer}
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