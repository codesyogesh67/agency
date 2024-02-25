import React from 'react'
import Header from '../Header'
import TestimonialCard from '../cards/TestimonialCard'
import {appReviewData} from "@/constants"

interface Props {
    
}

const Testimonials = (props: Props) => {
    return (
        <div className="mt-20">
        <Header title="testimonials" subtitle="What clients say about us" />

        <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData?.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
        </div>
    )
}

export default Testimonials
