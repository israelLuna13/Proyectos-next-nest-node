import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center">
      <h1>
        Producto no encontrado
      </h1>

      <Link href='/admin/products' className="bg-amber-400 text-black px-10 py-4 text-xl text-center font-bold cursor-pointer w-full lg:w-auto">
        Errorz
      </Link>
    </div>
  )
}
