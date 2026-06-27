"use client"
import { draftFact } from "@/schemas/schema";
import {createFact} from "@/servers/actions";
import {  useForm,FormProvider } from "react-hook-form"
export default function AddFactForm({children}:{children:React.ReactNode}) {
 const methods = useForm<draftFact>();

  const onSubmit =async  (data: draftFact) => {
    try {
      const res =await createFact(data)
      console.log(res);
      
      
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <>
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        <FormProvider {...methods}>
            <form onSubmit={(methods.handleSubmit(onSubmit))} className="space-y-5">
          {/* aqui se va a mostrar el formulario ya renderizado del server componente*/}
          {children}
          <input
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white w-full mt-5 p-3 font-bold cursor-pointer"
            value="Registrar Producto"
          />
        </form>
        </FormProvider>
      </div>
      
    </>
  )
}
