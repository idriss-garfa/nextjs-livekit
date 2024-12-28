import React, { Suspense } from 'react'
import LiveKit from './_livekit'

const Room = () => {
  return (
    <Suspense>
      <LiveKit />
    </Suspense>
  )
}

export default Room