"use client";
import { Company, draftFact, Location, Salary } from "@/schemas/schema";
import { useFormContext } from "react-hook-form";
type FormFactProps = {
  salarys: Salary[];
  companys: Company[];
  locations: Location[]
};

export default function FormFact({ salarys, companys ,locations}: FormFactProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<draftFact>();
  return (
    <>
      <div className="mb-5">
        <label className="text-sm uppercase font-bold" htmlFor="job_title">
          Job
        </label>
        <input
          type="text"
          {...register("job_title", {
            required: "Job title is required",
          })}
        />
      </div>
      {errors.job_title && <p>{errors.job_title.message}</p>}

      <div className="mb-5">
        <label htmlFor="name" className="text-sm uppercase font-bold">
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

      {errors.rating && <p>{errors.rating.message}</p>}

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
        {errors.founded && errors.founded.message}


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
        {errors.revenue && errors.revenue.message}

      <div className="mb-5">
        <label className="text-sm uppercase font-bold" htmlFor="salary_id">
          Salary
        </label>
        <select
          id="salary_id"
          className="w-full p-3  border border-gray-100"
          {...register("salary_id", {
            required: "The salary is required",
            valueAsNumber: true,
          })}
        >
          <option value="">-- Select salary --</option>
          {salarys.map((salary) => (
            <option value={salary.salary_id} key={salary.salary_id}>
              ${salary.salary_min} - ${salary.salary_max}
            </option>
          ))}
        </select>
      </div>

      {errors.salary_id && <p>{errors.salary_id.message}</p>}

      <div className="mb-5">
        <label className="text-sm uppercase font-bold" htmlFor="company_id">
          Company
        </label>
        <select
          id="company_id"
          className="w-full p-3  border border-gray-100"
          {...register("company_id", {
            required: "The company is required",
            valueAsNumber: true,
          })}
        >
          <option value="">-- Select company --</option>
          {companys.map((company) => (
            <option value={company.company_id} key={company.company_id}>
              {company.industry}
            </option>
          ))}
        </select>
      </div>

      {errors.company_id && <p>{errors.company_id.message}</p>}



        <div className="mb-5">
        <label className="text-sm uppercase font-bold" htmlFor="location_id">
          Company
        </label>
        <select
          id="location_id"
          className="w-full p-3  border border-gray-100"
          {...register("location_id", {
            required: "The location is required",
            valueAsNumber: true,
          })}
        >
          <option value="">-- Select Location --</option>
          {locations.map((location) => (
            <option value={location.location_id} key={location.location_id}>
              {location.state}
            </option>
          ))}
        </select>
      </div>

      {errors.company_id && <p>{errors.company_id.message}</p>}
    </>
  );
}
