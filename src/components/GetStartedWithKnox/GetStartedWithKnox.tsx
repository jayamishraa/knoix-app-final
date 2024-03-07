"use client";
import assetsManager from "@/assets/assetsManager";
import Image from "next/image";
import React from "react";

const GetStartedWithKnox = () => {
  return (
    <div className='flex flex-col py-[1.94rem] gap-[1.19rem] px-4 bg-[#0052FE] rounded-lg'>
      <div className='flex flex-col gap-[.875rem] text-white text-center'>
        <p className='text-2xl font-bold'>Get Started with KoinX for FREE</p>
        <p className='text-[.875rem] font-medium'>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
      <Image
        className='m-auto'
        alt=''
        src={assetsManager.getStartedWithKnox}
        width={178}
        height={166}
      />
      <button className='flex gap-[0.38rem] bg-white text-[#0F1629] rounded-lg  py-2 px-6 m-auto'>
        <p className='text-[.875rem] font-medium'>Get Started for FREE</p>
        <Image
          alt=''
          src={assetsManager.arrowRight}
          width={20}
          height={20}
          className='m-auto'
        />
      </button>
    </div>
  );
};

export default GetStartedWithKnox;
