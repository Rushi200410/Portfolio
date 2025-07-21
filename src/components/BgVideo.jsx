import React from 'react'

export default function BgVideo() {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden z-n1">
      <video
        loading="lazy"
        autoPlay
        muted
        loop
        playsInline
        className="w-100 h-100 object-fit-cover opacity-75"
      >
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

