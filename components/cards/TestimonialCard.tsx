import React from 'react'
import Image from "next/image"

interface TestimonialCardProps {
    key : string | number
            imageUrl: string
            review : string
            reviewerName : string
    
}

const TestimonialCard = ({imageUrl,review,reviewerName}: TestimonialCardProps) => {
    return (
        <div className="flex flex-col items-center md:flex-row gap-[1.88rem]">
        {/* <div> */}
        <Image
          src={imageUrl}
          alt="reviewer profile picture"
                className="w-[4.375rem] h-[4.375rem] rounded-[0.625rem]"
                width={80} height={80}
        />
        {/* </div> */}
        <div className="flex flex-col gap-[0.81rem]">
          <p className="text-darkBlue font-bold">{review}</p>
          <p className="text-darkBlue font-bold opacity-[0.3]">{reviewerName}</p>
        </div>
      </div>
    )
}

export default TestimonialCard
