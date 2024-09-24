import Image from 'next/image'
import React, { useState } from 'react'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'
import { TypewriterEffect } from '../ui/typewriter-effect'
interface Props {
  width?: number
  height?: number
  title?: string
  words?: { text: string; className?: string | undefined }[]
  img?: string
  subTitle?: string
}
const Banner = (props: Props) => {
  const [textSearch, setTextSearch] = useState<any>('')
  const handleSearch = () => {
    console.log('textSearch', textSearch)
  }
  const { height, img, subTitle, words } = props
  return (
    <div style={{ position: 'relative', width: '100%', height: `${height}px` }}>
      <Image alt="Banner" priority src={img ?? ''} fill style={{ objectFit: 'cover' }}></Image>
      <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center p-[20px]">
        <span className="text-white text-[36px] font-bold text-center">
          {words && <TypewriterEffect words={words}></TypewriterEffect>}
        </span>
        <span className="text-white mb-[50px] mt-[10px] flex justify-center text-center ">{subTitle}</span>
        <PlaceholdersAndVanishInput
          onChange={(values) => setTextSearch(values.target.value)}
          onSubmit={() => handleSearch()}
          placeholders={['Test hehehehe', 'Trời mưa to quá ', 'Gió cuốn em đi đâu r ']}
        />
      </div>
    </div>
  )
}

export default Banner
