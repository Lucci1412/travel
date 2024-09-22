import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../../ui/avatar'

const Header = () => {
  return (
    <div className="h-[120px] bg-slate-200 w-full  ">
      <div className="container mx-auto px-4 flex flex-row items-center  ">
        <div>Logo</div>
        <div className="flex-1"></div>
        <div className="flex flex-row">
          <span>Admin</span>
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
