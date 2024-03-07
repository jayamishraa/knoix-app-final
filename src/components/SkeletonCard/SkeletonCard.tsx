"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[125px] w-[100%] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[450px]' />
        <Skeleton className='h-4 w-[350px]' />
        <Skeleton className='h-4 w-[200px]' />
        <Skeleton className='h-4 w-[100px]' />
        <Skeleton className='h-4 w-[700px]' />
      </div>
    </div>
  );
}
