import assetsManager from "@/assets/assetsManager";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className='flex bg-white px-[.88rem] lg:px-14 py-5 justify-between'>
      <div className='my-auto'>
        <Image src={assetsManager.konixLogo} alt='Konix' />
      </div>
      <div className='lg:flex flex-1 justify-end items-center hidden'>
        <div className='flex space-x-8 items-center'>
          <Link href='#' className='font-semibold'>
            Crypto Taxes
          </Link>
          <Link href='#' className='font-semibold'>
            Free Tools
          </Link>
          <Link href='#' className='font-semibold'>
            Resource Center
          </Link>
          <button className='bg-blue-700 text-white px-4 py-2 rounded-md'>
            Get Started
          </button>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='lg:hidden'>
          <Button variant='outline'>
            <Image src={assetsManager.menu} alt='menu' height={30} width={30} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 mr-5'>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Crypto Taxes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Free Tools</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Free Tools</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Resource Center</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Get Started</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
