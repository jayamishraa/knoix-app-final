"use client";
import assetsManager from "@/assets/assetsManager";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Event {
  icon: string;
  title: string;
  description: string;
  itemType?: string;
}

const SentimentCard = () => {
  const events: Event[] = [
    {
      icon: assetsManager.bookIcon,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      itemType: "news",
    },
    {
      icon: assetsManager.trendingIcon,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      itemType: "trending",
    },
    {
      icon: assetsManager.trendingIcon,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      itemType: "news",
    },
    {
      icon: assetsManager.trendingIcon,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      itemType: "trending",
    },
    {
      icon: assetsManager.trendingIcon,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      itemType: "news",
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <p className='text-2l font-semibold text-[#0F1629]'>Sentiment</p>
          <div className='flex'>
            <p className='text-2l font-semibold text-[#44475B]'>Key Events</p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className='w-full'
          >
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className='md:basis-1/2 lg:basis-1/3 min-w-[50%]'
                >
                  <div className='p-1'>
                    <Card>
                      <CardContent
                        className={`
                rounded-xl
                ${
                  event.itemType === "news" ? "bg-[#e7f4fd]" : "bg-[#ebf9f4]"
                }  min-w-[90%] lg:min-w-[50%]  flex gap-4 px-[1.12rem] pt-[1.12rem] pb-[2.38rem]`}
                      >
                        <div>
                          <Image
                            className='items-start'
                            height={300}
                            width={300}
                            src={event.icon}
                            alt=''
                          />
                        </div>
                        <div className='flex flex-col'>
                          <div className='flex gap-4'>
                            <p className='text-[#0F1629] font-medium'>
                              {event.title}
                            </p>
                          </div>
                          <p className='text-[#768396] font-medium'>
                            {event.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* <div className='flex gap-[.88rem] overflow-x-auto relative'>
            {events.map((event: Event) => {
              return (
                <div
                  key={event.title}
                  className={`
                rounded-xl
                ${
                  event.itemType === "news" ? "bg-[#e7f4fd]" : "bg-[#ebf9f4]"
                }  min-w-[90%] lg:min-w-[50%]  flex gap-4 px-[1.12rem] pt-[1.12rem] pb-[2.38rem]`}
                >
                  <div>
                    <Image
                      className='items-start'
                      height={300}
                      width={300}
                      src={event.icon}
                      alt=''
                    />
                  </div>

                  <div className='flex flex-col'>
                    <div className='flex gap-4'>
                      <p className='text-[#0F1629] font-medium'>
                        {event.title}
                      </p>
                    </div>
                    <p className='text-[#768396] font-medium'>
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
        <div className='flex flex-col gap-6'>
          <p className='text-[#44475B] font-semibold'>Analyst Estimates</p>
          <div className='flex gap-[.7rem] lg:gap-10'>
            <Image
              src={assetsManager.percentageCircle}
              alt=''
              width={100}
              height={100}
            />
            <div className='flex flex-col gap-4 grow'>
              <div className='flex gap-4 items-center'>
                <p className='text-[#0F1629] font-medium'>Buy</p>
                <hr className='w-[75%] rounded h-2 bg-[#00B386]' />
                <p className='text-[#0F1629] font-medium'>76%</p>
              </div>
              <div className='flex gap-4 items-center'>
                <p className='text-[#0F1629] font-medium'>Hold</p>
                <hr className='w-[50px] rounded h-2 bg-[#C7C8CE]' />
                <p className='text-[#0F1629] font-medium'>8%</p>
              </div>
              <div className='flex gap-4 items-center'>
                <p className='text-[#0F1629] font-medium'>Sell</p>
                <hr className='w-[20px] rounded h-2 bg-[#F7324C]' />
                <p className='text-[#0F1629] font-medium'>16%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SentimentCard;
