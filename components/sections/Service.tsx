import React from 'react'
import Header from '../Header'
import Container from "@/components/Container"
import { serviceData } from "@/constants"
import Card from "@/components/Card"

interface Props {
    
}

const Service = (props: Props) => {
    return (
        <Container>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </Container>
    )
}

export default Service
