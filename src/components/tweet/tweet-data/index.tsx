import React from 'react'
import { IUser } from '../../../utilities/interfaces'

function TweetData ({ user: { avatar, followers, tweets, user } }: { user: IUser }): JSX.Element {
  return (
    <img className='w-[92px] h-[92px]  rounded border-8 z-10 border- border-[#EBD8FF] box-shadow-hr-shadow' src={avatar} alt={`User ${user}`} />
  )
}

export default TweetData
