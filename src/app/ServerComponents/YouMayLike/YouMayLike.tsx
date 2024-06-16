import Image from "next/image";
import { ICoin } from "../TrendingCoins/TrendingCoins";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const YouMayLike = async () => {
  const data = await fetch("https://api.coingecko.com/api/v3/search/trending", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const trendingCoins = await data.json();
  let coins: ICoin[] = trendingCoins.coins;
  const filteredCoins = coins.filter((coin: ICoin) => {
    // const firstEightChar = coin.item.data.price.slice(0, 8);
    const firstEightChar = coin.item.data.price;
    return firstEightChar !== "$0.0<sub";
  });

  return (
    <div className='bg-white p-[4.25rem] flex flex-col gap-4 w-full max-w-[100%]'>
      <div className='flex flex-col gap-5'>
        <p className='text-[#202020] text-2xl font-semibold'>You May Like</p>
        <Carousel
          opts={{
            align: "start",
          }}
          className='w-full'
        >
          <CarouselContent>
            {filteredCoins.map((coin: ICoin, index) => (
              <CarouselItem
                key={index}
                className='max-w-fit md:basis-1/2 lg:basis-1/3'
              >
                <div
                  key={coin.item.coin_id}
                  className='p-4 rounded-lg border border-gray-200 flex flex-col gap-3'
                >
                  <div className='flex gap-2'>
                    <Image
                      className='rounded-full  '
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={24}
                      height={24}
                    />
                    <p className='text-[#202020] font-medium'>
                      {coin.item.symbol}
                    </p>
                  </div>

                  <p>{coin.item.data.price}</p>
                  <div>
                    <Image
                      className='max-h-[100px] max-w-[100px]'
                      src={coin.item.data.sparkline}
                      alt={coin.item.name}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='text-[#202020] text-2xl font-semibold'>Trending Coins</p>
        <Carousel
          opts={{
            align: "start",
          }}
          className='w-full'
        >
          <CarouselContent>
            {filteredCoins.map((coin: ICoin, index) => (
              <CarouselItem
                key={index}
                className='max-w-fit md:basis-1/2 lg:basis-1/3'
              >
                <div
                  key={coin.item.coin_id}
                  className='p-4 rounded-lg border border-gray-200 flex flex-col gap-3'
                >
                  <div className='flex gap-2'>
                    <Image
                      className='rounded-full  '
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={24}
                      height={24}
                    />
                    <p className='text-[#202020] font-medium'>
                      {coin.item.symbol}
                    </p>
                  </div>

                  <p>{coin.item.data.price}</p>
                  <div>
                    <Image
                      className='max-h-[100px] max-w-[100px]'
                      src={coin.item.data.sparkline}
                      alt={coin.item.name}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <div className='flex gap-[.62rem] overflow-x-auto'>
          {filteredCoins.map((coin: ICoin) => {
            return (
              <div
                key={coin.item.coin_id}
                className='p-4 rounded-lg border border-gray-200 flex flex-col min-w-[10rem] gap-3'
              >
                <div className='flex gap-2'>
                  <Image
                    className='rounded-full  '
                    src={coin.item.thumb}
                    alt={coin.item.name}
                    width={24}
                    height={24}
                  />
                  <p className='text-[#202020] font-medium'>
                    {coin.item.symbol}
                  </p>
                </div>

                <p>{coin.item.data.price}</p>
                <div>
                  <Image
                    className='max-h-[100px] max-w-[100px]'
                    src={coin.item.data.sparkline}
                    alt={coin.item.name}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default YouMayLike;
