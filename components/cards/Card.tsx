

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"


type CardProps = {
    title : string
    description : string
    iconUrl: string
}

const Card = ({title,description,iconUrl }: CardProps) => {


    return (
        <div className="w-full flex justify-center">
            

    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
    
          <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
              
          <div className="flex items-center justify-center pt-2">
          <Image       
              src={iconUrl}
              alt="service icon" 
              width={80} height={80}
              />
          </div>
          <p className="text-[2.25rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      <Button className="w-[10.125rem] bg-themeColor">Learn More</Button>
        
              </div>

  
            </div>
            </div>
  )
}

export default Card