import GetStartedWithKnox from "@/components/GetStartedWithKnox/GetStartedWithKnox";
import React, { Suspense } from "react";
import BitCoinChart from "@/components/Charts/BitCoin/BitCoinChart";
import MenuBar from "@/components/MenuBar/MenuBar";
import TrendingCoins from "@/app/ServerComponents/TrendingCoins/TrendingCoins";
import SentimentCard from "@/components/SentimentCard/SentimentCard";
import PerformanceCard from "@/components/PerformanceCard/PerformanceCard";
import TokenomicCard from "@/app/ServerComponents/TokenomicCard/TokenomicCard";
import TeamCard from "@/app/ServerComponents/TeamCard/TeamCard";
import AboutCard from "@/components/AboutCard/AboutCard";
import { SkeletonCard } from "@/components/SkeletonCard/SkeletonCard";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='lg:px-14 flex gap-5 w-full px-[.88rem]'>
      {/* Left Section (70% width) */}
      <div className='flex flex-col gap-5 w-[100%] lg:w-[70%] h-full'>
        {/* Bitcoin Chart Section */}
        <Suspense fallback={<SkeletonCard />}>
          <div className='bg-white rounded-lg px-6 py-6 h-[30rem]'>
            <BitCoinChart slug={params.slug} />
          </div>
        </Suspense>

        {/* Menu Bar Section */}
        <div className='flex gap-8 border-b border-gray-200 overflow-x-auto'>
          <MenuBar />
        </div>

        {/* Performance Card Section */}
        <Suspense fallback={<SkeletonCard />}>
          <div
            id='performanceCard'
            className='rounded-lg bg-white flex flex-col p-6 gap-6'
          >
            <PerformanceCard />
          </div>
        </Suspense>

        {/* Sentiment Card Section */}
        <div
          id='sentimentCard'
          className='rounded-lg bg-white flex flex-col p-6 gap-8'
        >
          <SentimentCard />
        </div>

        {/* About Card Section */}
        <Suspense fallback={<SkeletonCard />}>
          <div
            id='aboutCard'
            className='flex p-6 flex-col gap-6 bg-white rounded-lg'
          >
            <AboutCard />
          </div>
        </Suspense>

        {/* Tokenomic Card Section */}
        <div
          id='tokenomicCard'
          className='flex p-6 flex-col gap-6 bg-white rounded-lg'
        >
          <TokenomicCard />
        </div>

        {/* Team Card Section */}
        <div
          id='teamCard'
          className='flex p-6 flex-col gap-6 bg-white rounded-lg'
        >
          <TeamCard />
        </div>
      </div>

      {/* Right Section (30% width) */}
      <div className='lg:flex flex-col gap-5 h-full w-[30%] hidden'>
        {/* Get Started Section */}
        <GetStartedWithKnox />

        {/* Trending Coins Section */}
        <Suspense fallback={<SkeletonCard />}>
          <TrendingCoins />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
