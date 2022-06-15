import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return <Image  src={`/images/logo.png`} layout={ 'fill' } alt={"NETFIlIX"} />       
}

export default Logo