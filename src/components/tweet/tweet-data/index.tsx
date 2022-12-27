import React from 'react'
import { IUser } from '../../../utilities/interfaces'

function TweetData ({ user: { avatar, tweets, user }, followers }: { user: IUser, followers: number }): JSX.Element {
  return (
    <>
      <picture className='before:content-[""] after:content-[""]
       before:h-2 after:h-2 mx-auto mb-8 flex items-center before:bg-[#EBD8FF]
     after:bg-[#EBD8FF] before:flex-grow after:flex-grow before:shadow-hr-shadow after:shadow-hr-shadow'>
        <img className='relative inline-block  rounded-full w-[92px] h-[92px] bg-ellips bg-cover from-[#4d27a6] to-[#a293c5]'
          src={avatar} alt={`User ${user}`} />
      </picture>
      <p className='mb-5 text-center font-medium text-2xl leading-7 uppercase text-[#EBD8FF]'>{tweets} tweets</p>
      <p className='mb-8 text-center font-medium text-2xl leading-7 uppercase text-[#EBD8FF]'>{followers} followers</p>
    </>
  )
}

export default TweetData
