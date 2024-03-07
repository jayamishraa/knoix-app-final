"use client";
import assetsManager from "@/assets/assetsManager";
import { API_BASE_URL } from "@/utils/config";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SkeletonCard } from "@/components/SkeletonCard/SkeletonCard";

interface ICoinData {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: null | number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: {
    times: number;
    currency: string;
    percentage: number;
  };
  symbol: string;
  total_supply: number;
  total_volume: number;
}

const PerformanceCard = () => {
  const [data, setData] = useState<ICoinData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // ******** Fetch data from the API *********
  const getData = async (pathname: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${API_BASE_URL}/coins/markets?vs_currency=usd&ids=${pathname}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
      setData(await res.json());
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  // ******** useEffect to get the pathname and get the coin data *********
  useEffect(() => {
    let pathname = window.location.pathname;
    pathname = pathname.split("/")[1];
    getData(pathname);
  }, []);

  return isLoading ? (
    <SkeletonCard />
  ) : (
    <>
      <p className='text-[#0F1629] text-2xl font-semibold'>Performance</p>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-[1.37rem] justify-between'>
          <div className='flex flex-col gap-2'>
            <p>Today&apos;s Low</p>
            <p>{`$${data[0]?.low_24h}`}</p>
          </div>
          <div
            style={{
              height: "10%",
              width: "50%",
            }}
          >
            <Image
              width={0}
              height={0}
              alt=''
              src={assetsManager.RangesliderWrapper}
            />
          </div>

          <div className='flex flex-col'>
            <p>Today&apos;s High</p>
            <p>{`$${data[0]?.high_24h}`}</p>
          </div>
        </div>
        <div className='flex gap-[1.37rem] justify-between'>
          <div className='flex flex-col gap-2'>
            <p>52W Low</p>
            <p>46,930.22</p>
          </div>
          <div
            style={{
              height: "10%",
              width: "50%",
            }}
          >
            <Image
              width={0}
              height={0}
              alt=''
              src={assetsManager.RangesliderWrapper}
            />
          </div>

          <div className='flex flex-col'>
            <p>52W High</p>
            <p>46,930.22</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-[.94rem]'>
        <p className='text-[#0F1629] text-2xl font-semibold'>Fundamentals</p>
        <div className='flex lg:flex-row flex-col justify-between'>
          <div className='flex flex-col w-full lg:w-2/5'>
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>Bitcoin Price</p>
              <p className='text-[#111827] font-medium'>
                ${data[0]?.current_price}
              </p>
            </div>
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>24h Low / 24h High</p>
              <p className='text-[#111827] font-medium'>
                {`$${data[0]?.low_24h} / $${data[0]?.high_24h}`}
              </p>
            </div>{" "}
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>7d Low / 7d High</p>
              <p className='text-[#111827] font-medium'>$46,930.22</p>
            </div>{" "}
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>Trading Volume</p>
              <p className='text-[#111827] font-medium'>
                ${data[0]?.total_volume}
              </p>
            </div>{" "}
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>Market Cap Rank</p>
              <p className='text-[#111827] font-medium'>
                #{data[0]?.market_cap_rank}
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full lg:w-2/5 '>
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>Market Cap</p>
              <p className='text-[#111827] font-medium'>
                ${data[0]?.market_cap}
              </p>
            </div>
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>Market Cap Dominance</p>
              <p className='text-[#111827] font-medium'>
                {data[0]?.market_cap}
              </p>
            </div>{" "}
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>Volume / Market Cap</p>
              <p className='text-[#111827] font-medium'>
                {(data[0]?.total_volume / data[0]?.market_cap).toPrecision(4)}
              </p>
            </div>{" "}
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>All-Time High</p>
              <p className='text-[#111827] font-medium'>${data[0]?.ath}</p>
            </div>{" "}
            <div className='flex justify-between border-b border-gray-200 py-[.78rem]'>
              <p className='text-[#768396] font-medium'>All-Time Low</p>
              <p className='text-[#111827] font-medium'>${data[0]?.atl}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceCard;
