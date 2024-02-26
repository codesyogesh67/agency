import React from 'react'
import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container"
import Image from "next/image"

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <Container>
   
             <div className="flex flex-col gap-[1.9rem] w-full">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
                    <div>
                    <Image
 
      className="cursor-pointer" 
      src="/images/footer_logo.png" 
      height="100" 
      width="100" 
      alt="Footer Logo" 
    />
          
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2020 Epixelab. All rights reserved.
        </div>
        <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p>
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.
        </p>
      </div>
 
            
            </div>
            </Container>
    )
}

export default Footer
