"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import Link from 'next/link'

const navItem = [
  {
    id: 1,
    item: "Overview"
  },
  {
    id: 2,
    item: "Fundamentals"
  },
  {
    id: 3,
    item: "News Insights"
  },
  {
    id: 4,
    item: "Sentiments"
  },
  {
    id: 5,
    item: "Team"
  },
  {
    id: 6,
    item: "Technicals"
  },
  {
    id: 7,
    item: "Tokenomics"
  }
]

const Navbar2 = () => {
  return (
    <NavigationMenu className=' overflow-x-auto border-b border-borderGray'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className='flex flex-row'>
            {
              navItem.map((ele) => {
                return <Link key={ele.id} href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {ele.item}
                  </NavigationMenuLink>
                </Link>
              })
            }
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar2
