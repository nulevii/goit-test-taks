import React from 'react'
import Tweet from '../tweet'
import users from '../../utilities/users.json'

function TweetsList (): JSX.Element {
  return (
    <main className='flex flex-col p-3 gap-4 items-center justify-center min-w-[520px] min-h-screen 2xl:flex-row'>
      {users.map((user) => (<Tweet key={user.id} user={user} />))}
    </main>
  )
}

export default TweetsList
