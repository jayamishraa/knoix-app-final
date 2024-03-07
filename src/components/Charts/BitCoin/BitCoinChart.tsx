"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { API_BASE_URL } from "@/utils/config";
import { SkeletonCard } from "@/components/SkeletonCard/SkeletonCard";

const SymbolOverview = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);

interface BitCoinChartProps {
  slug: string;
}
const BitCoinChart: React.FC<BitCoinChartProps> = ({ slug }) => {
  // ******** useState ************
  const [symbol, setSymbol] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // ******** useEfeect to get the data from the Api *********
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/coins/${slug}`);
        const data = await res.json();
        const sym = [
          (data.symbol + "usd").toUpperCase(),
          (data.symbol + "usd").toUpperCase(),
        ];
        setSymbol(sym);
      } catch (e) {
        setSymbol(["BTCUSD", "BTCUSD"]);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [slug]);

  return isLoading ? (
    <SkeletonCard />
  ) : (
    <SymbolOverview
      width={500}
      fontColor='#0B1426'
      symbols={[[symbol[0]]]}
      dateFormat='MM/dd/yyyy'
      colorTheme='light'
      scalePosition='left'
      lineWidth={1}
      hideMarketStatus={true}
      gridLineColor='#F0F3FA'
      autosize
      chartType='area'
      downColor='#800080'
      borderDownColor='#800080'
      wickDownColor='#800080'
    />
  );
};

export default BitCoinChart;
