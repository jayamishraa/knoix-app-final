"use client";
import assetsManager from "@/assets/assetsManager";
import Image from "next/image";
import React from "react";

const AboutCard = () => {
  return (
    <>
      <p className='text-[#0F1629] font-semibold text-2l '>About Bitcoin</p>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-[.62rem]'>
          <p className='text-[#0B1426] font-bold '>What is Bitcoin?</p>
          <p className='text-[#3E424A] font-medium'>
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <hr />
        <div className='flex flex-col gap-[.625rem]'>
          <p className='text-[#0B1426] font-bold'>Lorem ipsum dolor sit amet</p>
          <p className='text-[#3E424A] font-medium '>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at. Fermentum hendrerit imperdiet nulla
            viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi
            adipiscing semper scelerisque porttitor pulvinar nunc risus.
            Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus
            ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>
        <hr />
        <div className='flex flex-col gap-2'>
          <p className='text-[#0F1629] font-extrabold'>
            Already Holding Bitcoin?
          </p>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex gap-[.73rem] p-3 pr-[1.59rem] rounded-[0.4155rem] bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] to-90%'>
              <Image
                src={assetsManager.profit}
                alt=''
                height={500}
                width={150}
              />
              <div className='flex flex-col gap-4 mt-2 w-1/2'>
                <p className='text-white font-bold text-lg'>
                  Calculate your Profits
                </p>
                <button className='flex bg-white rounded-lg p-2 '>
                  <div className='flex m-auto'>
                    <p className='text-sm text-[#0F1629]'> Check Now</p>
                    <Image
                      src={assetsManager.arrowRight}
                      alt=''
                      height={20}
                      width={20}
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className='flex gap-[.73rem] p-3 pr-[1.59rem] rounded-[0.4155rem] bg-gradient-to-r from-[#FF9865] to-[#EF3031] to-90%'>
              <Image
                src={assetsManager.liability}
                alt=''
                height={700}
                width={150}
              />
              <div className='flex flex-col gap-4 mt-2 w-1/2'>
                <p className='text-white font-bold text-lg'>
                  Calculate your Profits
                </p>
                <button className='flex bg-white rounded-lg p-2 '>
                  <div className='flex m-auto'>
                    <p className='text-sm text-[#0F1629]'> Check Now</p>
                    <Image
                      src={assetsManager.arrowRight}
                      alt=''
                      height={20}
                      width={20}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className='text-[#3E424A] font-medium'>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </>
  );
};

export default AboutCard;
