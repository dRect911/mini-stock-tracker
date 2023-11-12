"use client"

import { User } from '@phosphor-icons/react'
import React from 'react'

const Card = () => {
  return (
    <div className='' >
      <User size={24} />
      <div className="texts">
        <span className='' >Total Users</span>
        <span className='' >17.324</span>
        <span className='' ><span className="text-green-500">11.8%</span> more than previous week</span>
      </div>
    </div>
  )
}

export default Card