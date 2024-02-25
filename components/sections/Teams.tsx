import React from 'react'
import Header from '../Header'
import {teamData} from "@/constants"
import TeamCard from '../cards/TeamCard'

interface Props {
    
}

const Teams = (props: Props) => {
    return (
        <div className="mt-40">
            <Header title="our team" subtitle="Meet The Team" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[3.31rem]">
        {teamData.map((team) => (
          <TeamCard
            key={team.id}
            imageUrl={team.imageUrl}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
            
        </div>
    )
}

export default Teams
