'use client'
import React, { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../../ui/avatar'
import Link from 'next/link'
import Image from 'next/image'
import { ListMenu } from '@/test/listMenu'
import { PlaceholdersAndVanishInput } from '../../ui/placeholders-and-vanish-input'
const Header = () => {
  const [textSearch, setTextSearch] = useState<any>('')
  const handleSearch = () => {
    console.log('textSearch', textSearch)
  }
  return (
    <div className="h-[70px] w-full items-center flex  ">
      <div className="container mx-auto px-4 flex flex-row  items-center  ">
        <div>
          <Image
            alt="Logo"
            priority
            width={88}
            height={45}
            src={`https://2trip.vn/wp-content/themes/trip/img/logo_brand.svg`}
          ></Image>
        </div>
        <div className='ml-[36px] w-[500px]'>
          <PlaceholdersAndVanishInput
            onChange={(values) => setTextSearch(values.target.value)}
            onSubmit={() => handleSearch()}
            placeholders={['Bạn muốn đi đâu', 'Hôm nay ăn gì', 'Nơi nào đẹp nhất']}
          />
        </div>
        <div className="flex-1 flex ml-[36px] ">
          <ul className="flex flex-row">
            {ListMenu?.map((item, index) => (
              <li key={index} className="flex flex-row mr-[20px] hover:text-blue-800">
                <div className="mr-[6px]">
                  <div>{typeof item?.icon === 'function' ? item.icon() : item?.icon}</div>
                </div>
                <Link href={`${item.path}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center ml-[20px]">
          <span className="mr-[10px]">Admin</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default Header
