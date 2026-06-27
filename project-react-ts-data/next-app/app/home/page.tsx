import Card from "@/components/Card";

export default function Home() {
     const sections = [
    {
      title: "Company",
      description: "All products",
      href: "/data/company",
      
    },
    {
      title: "Salarys",
      description: "All Countrys",
      href: "/data/salary",
      
    },
    {
      title: "Location",
      description: "All Customers",
      href: "/data/location",
      
    },
        {
      title: "Fact",
      description: "",
      href: "/data/fact",
      
    }
    
  ];
  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <h1 className="text-2xl font-bold mb-6"> Panel principal1</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sections.map((section)=>(
            <Card key={section.title} {...section}/>
        ))}
      </div>
    </div>
  )
}
