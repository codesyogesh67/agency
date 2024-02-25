import React from 'react'
import Image from "next/image"
import { Separator } from "@/components/ui/separator";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

interface TeamCardProps {
    key : string | number
            imageUrl : string
            name :string
            profession :string
    
}

const TeamCard = ({imageUrl,name,profession}: TeamCardProps) => {
    return (
        <div>
      <div className="flex flex-col justify-center items-center border-[4px] border-[#EBEAED] rounded-t-[1rem] py-[3rem]">
        <div>
         
                     <Image       
             src={imageUrl}
                        alt="team member photo"
                        className="w-[7.5rem] h-[7.5rem] rounded-full"
              width={80} height={80}
              />
        </div>
        <p className="text-lightBlue font-bold text-[1.2rem] my-6">{name}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{profession}</p>
      </div>

      <div className="flex justify-around items-center h-[3.6875rem] border-[4px] border-[#EBEAED] border-t-0  rounded-b-[1rem]">
        <div>
         <FaSquareXTwitter className="icon" />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
<FaSquareFacebook className="icon" />        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
<IoLogoInstagram className="icon" />        </div>
      </div>
    </div>
    )
}

export default TeamCard
