import Card from '@/components/Card';
import { Users } from "lucide-react";
import React from 'react'

export default function Home() {
         const sections = [
    {
      title: "Customers",
      description: "All Customers",
      href: "/data/customers",
      icon:Users
      
    },
    {
      title: "Categorys",
      description: "All Categorys",
      href: "/data/categorys",
      icon:Users
      
    },
    {
      title: "Facts",
      description: "All Facts",
      href: "/data/facts",
      icon:Users
      
    },
        {
      title: "Payments",
      description: "All Payments",
      href: "/data/payments",
      icon:Users
      
    }
    
  ];
  return (
    <div className='min-h-screen bg-gray-300 p-6'>
        <h1 className='text-2xl font-bold mb-6'>Data Analytic Ecommerce</h1>
        <div className=' grid grid-6 sm:grid-cols-2 md:grid-cols-3'>
            {sections.map((section)=>(
                <Card key={section.title} {...section}/>
            ))}
        </div>
      
    </div>
  )
}
