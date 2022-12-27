import React from 'react'

function TweetButton ({ onFollow, onUnfollow, isFollow }:
{ onFollow: () => void, onUnfollow: () => void, isFollow: boolean }): JSX.Element {
  return (
    <button className={`w-[226px] h-[56px] block mx-auto rounded-xl shadow-btn-shadow font-semibold text-xl
    leading-6 uppercase  text-[#373737] transition-colors hover:bg-[#8b7edc]
    ${isFollow ? 'bg-[#5CD3A8]' : 'bg-[#ebd8ff]'}`}
    onClick={isFollow ? onUnfollow : onFollow}>{isFollow ? 'following' : 'follow'}</button>
  )
}

export default TweetButton
