
import z from 'zod'

export const SalarySchema = z.object({
  salary_id: z.number(),
  salary_min: z.number(),
  salary_max: z.number()
}).strict();

export const CompanySchema = z.object({
  company_id: z.number(),
  headquarters: z.string(),
  type_of_ownership:z.string(),
  industry: z.string(),
  sector: z.string()
}).strict();
export const LocationSchema = z.object({
  location_id: z.number(),
  city: z.string(),
  state: z.string(),
}).strict();
export const FactSchema = z.object({
  fact_id: z.number(),
  job_title: z.string(),
  rating: z.number(),
  founded: z.number().nullable(),
  revenue: z.string().nullable(),
  location_id: z.number(),
  company_id: z.number(),
  salary_id: z.number(),
  company:z.object({CompanySchema}),
  location:z.object({LocationSchema}),
  salary:z.object({SalarySchema})

}).strict();


export const SalarysSchema=z.object({
    data:z.array(SalarySchema),
    total:z.number()
})

export const CompanysSchema=z.object({
    data:z.array(CompanySchema),
    total:z.number()
})

export const FactsSchema=z.object({
    data:z.array(FactSchema),
    total:z.number()
})
export const LocationsSchema=z.object({
    data:z.array(LocationSchema),
    total:z.number()
})




export type Salary= z.infer<typeof SalarySchema>
export type Company= z.infer<typeof CompanySchema>
export type Location=z.infer<typeof LocationSchema>
export type Fact=z.infer<typeof FactSchema>
export type draftFact=Omit< Fact,'fact_id'|'salary'|'company'|'location'>