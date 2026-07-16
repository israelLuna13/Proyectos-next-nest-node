import z from "zod";

export const CustomerSchema = z.object({
  id_cust: z.number(),
  customer_id: z.string(),
  age: z.number(),
  gender: z.string(),
  city: z.string(),
  is_returning_customer: z.boolean(),
});

export const CustomersSchemas = z.object({
    data:z.array(CustomerSchema),
    total:z.number()
})

export type Customer= z.infer<typeof CustomerSchema>