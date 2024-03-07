import assetsManager from "@/assets/assetsManager";
import Image from "next/image";
import React from "react";

const TokenomicCard = () => {
  return (
    <>
      <p className='text-[#0F1629] text-2xl font-semibold'>Tokenomics</p>
      <div className='flex flex-col gap-4'>
        <p className='text-[#1D1D1D] text-lg font-semibold'>
          Initial Distribution
        </p>
        <div className='flex gap-6 item-center'>
          <Image src={assetsManager.pieChart} alt='' height={200} width={200} />
          <div className='flex flex-col gap-4 self-center '>
            <div className='flex gap-2'>
              <div className='bg-[#0082FF] rounded-full h-5 w-5 ' />
              <p className='text-[#202020] font-normal'>
                Crowdsale investors: 80%
              </p>
            </div>
            <div className='flex gap-2'>
              <div className='bg-[#FAA002] rounded-full h-5 w-5' />
              <p className='text-[#202020] font-normal'>Foundation: 20%</p>
            </div>
          </div>
        </div>
        <p className='text-[#3E424A] font-medium'>
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </>
  );
};

export default TokenomicCard;
