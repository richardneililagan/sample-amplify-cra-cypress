import React, { useRef, useEffect } from 'react'

// :: ---

/**
 *  This component exists because React v16 is
 *  a bit iffy with the [muted] attribute
 *  on <video> elements .
 */
function SafeVideo({ src, poster }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')
  }, [])

  return (
    <video
      src={src}
      poster={poster}
      ref={videoRef}
      style={{ objectFit: 'cover' }}
      autoPlay
      muted
      loop
    />
  )
}

export default SafeVideo
