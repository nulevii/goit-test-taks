import React from 'react'
import logo from '../../assets/images/logo.png'
import TweetData from './tweet-data'
import { IUser } from '../../utilities/interfaces'
function Tweet ({ user }: { user: IUser }): JSX.Element {
  return (
    <article className='section-gradient flex-shrink-0 relative bg-twit-pattern px-6 pt-6 pb-12 shadow-section-shadow gradient-mask-tr-50% w-[454px] h-[547px] rounded-3xl'>
      <a href="#"><img className='mb-[160px]' src={logo} alt="adsf" /></a>
      <hr className='absolute w-full h-2 inset-y-1/2 left-0 bg-[#EBD8FF] shadow-hr-shadow'/>
      <TweetData user={user}/>
    </article>
  )
}

export default Tweet
