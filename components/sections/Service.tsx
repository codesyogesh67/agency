import React from 'react'
import Header from '../Header'
import Container from "@/components/Container"
import { serviceData } from "@/constants"
import Card from "@/components/cards/Card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Video from 'next-video';
import sample from '@/videos/video.mp4'

interface Props {
    
}

const Service = (props: Props) => {
    return (
    <>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] md:justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
            </div>
            
            <section className="mt-20 bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                    <div className="flex flex-col justify-center gap-8">
                    <p className="text-lightBlue font-bold text-2xl ">
                            Many Blocks and Components
        </p>
        <p className="text-black/50 text-[1.2rem] mt-4 mb-8">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.{" "}
        </p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-transparent text-black border-2 border-black-400 rounded-3xl hover:bg-white">
              <Link href="#events">
                Explore
              </Link>
            </Button>
          </div>
            <div className="z-10">
            <Video src={sample} />
</div>
         
        </div>
      </section> 
    </>
    )
}

export default Service
