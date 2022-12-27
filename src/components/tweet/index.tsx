import React, { useState, useEffect } from 'react'

import logo from '../../assets/images/logo.png'
import { IUser } from '../../utilities/interfaces'

import TweetData from './tweet-data'
import TweetButton from './tweet-button'

function Tweet ({ user }: { user: IUser }): JSX.Element {
  const [followers, setFolowers] = useState(user.followers)
  const [isFollow, setIsFollow] = useState(false)

  useEffect(() => {
    const userFollowsInfo = localStorage.getItem(`user${user.id}`)
    if (userFollowsInfo !== null) {
      const { followers, isFollow } = JSON.parse(userFollowsInfo)
      setFolowers(followers)
      setIsFollow(isFollow)
    }
  }, [])

  const onFollow = (): void => {
    const newFollowers = followers + 1
    const newIsFollow = true
    setFolowers(newFollowers)
    setIsFollow(newIsFollow)
    localStorage.setItem(`user${user.id}`, JSON.stringify({ followers: newFollowers, isFollow: newIsFollow }))
  }
  const onUnfollow = (): void => {
    const newFollowers = followers - 1
    const newIsFollow = false
    setFolowers(newFollowers)
    setIsFollow(newIsFollow)
    localStorage.setItem(`user${user.id}`, JSON.stringify({ followers: newFollowers, isFollow: newIsFollow }))
  }
  return (
    <article className='section-gradient flex-shrink-0 relative w-[454px] h-[547px] bg-twit-pattern pb-12 shadow-section-shadow gradient-mask-tr-50% rounded-3xl'>
      <a href="#"><img className='mb-[160px] pl-6 pt-6' src={logo} alt="adsf" /></a>
      <TweetData user={user} followers={followers}/>
      <TweetButton onFollow={onFollow} onUnfollow={onUnfollow} isFollow={isFollow} />
    </article>
  )
}

export default Tweet
