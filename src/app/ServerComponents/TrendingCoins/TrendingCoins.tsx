import assetsManager from "@/assets/assetsManager";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

// Interface for the percentage change in different currencies
export interface IPriceChangePercentage24h {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  dot: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  gel: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  ngn: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  yfi: number;
  zar: number;
  bits: number;
  link: number;
  sats: number;
}
// Interface for the data structure received from the API
export interface IData {
  price: string;
  price_btc: string;
  price_change_percentage_24h: IPriceChangePercentage24h;
  market_cap: string;
  market_cap_btc: string;
  total_volume: string;
  total_volume_btc: string;
  sparkline: string;
  content: any;
}

// Interface for the individual coin item
export interface ICoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: IData;
}

// Interface for the overall coin structure
export interface ICoin {
  item: ICoinItem;
}

// React component for displaying trending coins
const TrendingCoins = async () => {
  // Fetch data from the CoinGecko API
  const data = await fetch("https://api.coingecko.com/api/v3/search/trending", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Parse the JSON response
  const trendingCoins = await data.json();
  // Get the top 3 trending coins
  const coins: ICoin[] = trendingCoins.coins.slice(0, 3);

  return (
    <div className='flex flex-col p-6 gap-6 bg-white rounded-lg w-full'>
      <p className='text-[#0F1629] text-2xl font-semibold'>Trending Coins</p>
      <div className='flex flex-col gap-5'>
        {coins.map((coin: ICoin) => {
          return (
            <div
              key={coin.item.coin_id}
              className='flex items-center justify-between'
            >
              <div className='flex gap-[.38rem] max-w-[70%]'>
                {/* Display the coin's avatar */}
                <Avatar>
                  <AvatarImage src={coin.item.small} alt={coin.item.name} />
                </Avatar>
                {/* Display the coin's name and symbol */}
                <p className='text-[#0F1629] font-medium break-all'>
                  {coin.item.name} ({coin.item.symbol})
                </p>
              </div>
              {/* Display the price change percentage with appropriate styling */}
              {coin.item.data.price_change_percentage_24h.inr > 0 ? (
                <div className='rounded flex gap-[.38rem] p-2 text-green-500 bg-green-200 '>
                  <Image alt='' src={assetsManager.upGreenArrow} />
                  <p className='text-sm'>
                    {coin.item.data.price_change_percentage_24h.inr.toPrecision(
                      2
                    )}
                    %
                  </p>
                </div>
              ) : (
                <div className='rounded flex gap-[.38rem] p-2 text-red-500 bg-red-200 w-fit'>
                  <Image alt='' src={assetsManager.downRedArrow} />
                  <p className='text-sm w-fit'>
                    {coin.item.data.price_change_percentage_24h.inr.toPrecision(
                      2
                    )}
                    %
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCoins;
