import { useForm } from "react-hook-form";
import type { Company, draftFact, Location, Salary } from "../schema/schema";
import Error from "../components/Error";
import { useEffect, useState } from "react";
import { createFact, getCompany, getLocation, getSalary } from "../server/server";
export default function FormFact() {
  const [dataSalary, setDataSalary] = useState<Salary[]>([]);
    const [dataCompany, setDataCompany] = useState<Company[]>([]);
      const [dataLocation, setDataLocation] = useState<Location[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
       try {
         const salaries = await getSalary();
         const locations = await getLocation();
         const companies = await getCompany();
         setDataCompany(companies.data)
         setDataLocation(locations.data)
        setDataSalary(salaries.data);
       } catch (error) {
        console.log(error);
        
       }
        
     
    }
    loadData();
  }, []);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<draftFact>();

  const registerFact = async (data: draftFact) => {
    try {
        const result = await createFact(data);
    console.log(result);
    } catch (error) {
        console.log(error);
        
    }
    
  };
  return (
    <>
      <div>
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(registerFact)}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        action=""
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Title
          </label>
          <input
            id="job_title"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Name Job"
            {...register("job_title", {
              required: "The name is required",
            })}
          />
        </div>
        {errors.job_title && <Error> {errors.job_title.message}</Error>}

        <div className="mb-5">
          <label htmlFor="rating" className="text-sm uppercase font-bold">
            Rating
          </label>
          <input
            id="rating"
            className="w-full p-3  border border-gray-100"
            type="number"
            placeholder="Rating job"
            {...register("rating", {
              required: "The rating is required",
            })}
          />
        </div>
        {errors.rating && <Error> {errors.rating.message}</Error>}

        <div className="mb-5">
          <label htmlFor="founded" className="text-sm uppercase font-bold">
            Founded
          </label>
          <input
            id="founded"
            className="w-full p-3  border border-gray-100"
            type="number"
            placeholder="Founded job"
            {...register("founded", {
              required: "The founded is required",
            })}
          />
        </div>
        {errors.founded && <Error> {errors.founded.message}</Error>}

        <div className="mb-5">
          <label htmlFor="revenue" className="text-sm uppercase font-bold">
            Revenue
          </label>
          <input
            id="revenue"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="revenue job"
            {...register("revenue", {
              required: "The revenue is required",
            })}
          />
        </div>
        {errors.revenue && <Error> {errors.revenue.message}</Error>}


        <div className="mb-5">
          <label htmlFor="salary_id" className="text-sm uppercase font-bold">
            Salary
          </label>
          <select
            id="salary_id"
            className="w-full p-3  border border-gray-100"
            {...register("salary_id", {
              required: "The salary is required",
              valueAsNumber:true
            })}
          >
            <option value="">
                -- Select Salary --
            </option>
            {
                dataSalary.map((salary)=>(
                    <option key={salary.salary_id} value={salary.salary_id}>
                        ${salary.salary_min} - ${salary.salary_max}
                    </option>
                ))
            }
          </select>
        </div>
        {errors.salary_id && <Error> {errors.salary_id.message}</Error>}


        <div className="mb-5">
          <label htmlFor="company_id" className="text-sm uppercase font-bold">
            Company
          </label>
          <select
            id="company_id"
            className="w-full p-3  border border-gray-100"
            {...register("company_id", {
              required: "The company is required",
              valueAsNumber:true
            })}
          >
            <option value="">
                -- Select comapny --
            </option>
            {
                dataCompany.map((company)=>(
                    <option key={company.company_id} value={company.company_id}>
                        {company.industry}
                    </option>
                ))
            }
          </select>
        </div>
        {errors.company_id && <Error> {errors.company_id.message}</Error>}



          <div className="mb-5">
          <label htmlFor="location_id" className="text-sm uppercase font-bold">
            Location
          </label>
          <select
            id="location_id"
            className="w-full p-3  border border-gray-100"
            {...register("location_id", {
              required: "The location is required",
              valueAsNumber:true
            })}
          >
            <option value="">
                -- Select location --
            </option>
            {
                dataLocation.map((location)=>(
                    <option key={location.location_id} value={location.location_id}>
                        {location.city}
                    </option>
                ))
            }
          </select>
        </div>
        {errors.location_id && <Error> {errors.location_id.message}</Error>}
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Save data"
        />
      </form>
    </>
  );
}
