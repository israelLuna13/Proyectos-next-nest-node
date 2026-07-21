import z from "zod";

export const CustomerSchema = z.object({
  id_cust: z.number(),
  customer_id: z.string(),
  age: z.number(),
  gender: z.string(),
  city: z.string(),
  is_returning_customer: z.boolean(),
});

export const CategorySchema = z.object({
  id_category: z.number(),
  product_category: z.string(),
});

export const PaymentSchema = z.object({
  id_payment: z.number(),
  payment_method: z.string(),
});

export const DeviceSchema = z.object({
  id_device: z.number(),
  device_type: z.string(),
});

export const FactSchema = z.object({
  id_fact: z.number(),
  order_id: z.string(),
  date: z.string(),
  id_cust: z.number(),
  id_category: z.number(),
  id_device: z.number(),
  id_payment: z.number(),
  unit_price: z.number(),
  quantity: z.number(),
  discount_amount: z.number(),
  total_amount: z.number(),
  delivery_time_days: z.number(),
  customer_rating: z.number(),
  dim_customer: CustomerSchema,
  dim_category:CategorySchema,
  dim_device:DeviceSchema,
  dim_payment:PaymentSchema,
});

export const CustomersSchemas = z.object({
  data: z.array(CustomerSchema),
  total: z.number(),
});

export const CategoryssSchemas = z.object({
  data: z.array(CategorySchema),
  total: z.number(),
});
export const PaymentsSchemas = z.object({
  data: z.array(PaymentSchema),
  total: z.number(),
});

export const DevicesSchemas = z.object({
  data: z.array(DeviceSchema),
  total: z.number(),
});
export const FactsSchemas = z.object({
  data: z.array(FactSchema),
  total: z.number(),
});

export type Customer = z.infer<typeof CustomerSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Payment = z.infer<typeof PaymentSchema>;
export type Fact = z.infer<typeof FactSchema>;
