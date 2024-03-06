import Image from 'next/image'
import React from 'react'

const Logo = ({ url }: { url?: string }) => {
  return (
    <div className={`relative h-16 w-24 ${url && "w-[10%] lg:w-[5%] md:w-[5%]"}`}>
      <Image src={url ? url : "/koinX_logo.svg"} alt='logo' sizes='100vw' className={`object-contain`} fill />
    </div>
  )
}

export default Logo
