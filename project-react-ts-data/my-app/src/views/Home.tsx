import Card from "../components/Card";
export default function Home() {
  const sections = [
    {
      title: "Products",
      description: "All products",
      href: "/data/salary",
      //   icon:hero ,
    },
    {
      title: "Countrys",
      description: "All Countrys",
      href: "/data/location",
      //   icon: hero,
    },
    {
      title: "Customers",
      description: "All Customers",
      href: "/data/company",
      //   icon: hero,
    },
    {
      title: "Transactions",
      description: "",
      href: "/data/fact",
      //   icon: hero,
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Panel principal</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} {...section} />
          ))}
        </div>
      </div>
    </>
  );
}
