import { getCompany } from '@/servers/get'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page() {
    try {
        const result = await getCompany()
        console.log(result);
        
    } catch (error) {
        console.log(error);
        notFound()
        
    }
  return (
    <div>
      
    </div>
  )
}
