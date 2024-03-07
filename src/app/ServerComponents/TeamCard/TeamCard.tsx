import assetsManager from "@/assets/assetsManager";
import Image from "next/image";
import React from "react";

interface ITeam {
  name: string;
  role: string;
  image: string;
  desc: string;
}

const TeamCard = () => {
  const team: ITeam[] = [
    {
      name: "John Smith",
      role: "CEO",
      image: assetsManager.johnSmith1,
      desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Elina Williams",
      role: "CTO",
      image: assetsManager.elinaWilliams,
      desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "John Smith",
      role: "Product Manager",
      image: assetsManager.johnSmith2,
      desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <>
      <p className='text-[#0F1629] font-semibold text-2xl'>Team</p>
      <p className='text-[#3E424A] font-medium'>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      {team.map((item: ITeam) => {
        return (
          <div
            key={item.image}
            className=' flex flex-col lg:flex-row gap-4 rounded-lg bg-[#e7f4fd] p-[.7rem]'
          >
            <div className='flex flex-col gap-[.82rem] m-auto lg:w-1/5'>
              <Image
                src={item.image}
                alt='John Smith'
                width={100}
                height={100}
                className='rounded-lg lg:m-auto'
              />
              <div className='flex flex-col gap-1'>
                <p className='text-[#0F1629] font-semibold text-center'>
                  {item.name}
                </p>
                <p className='text-[#3E424A] text-xs font-medium text-center'>
                  {item.role}
                </p>
              </div>
            </div>
            <div className='lg:w-4/5 w-full lg:m-auto'>
              <p className='text-[#0F1629] text-sm '>{item.desc}</p>
            </div>
          </div>
        );
      })}

      {/* <div className='flex gap-4 rounded-lg bg-[#e7f4fd] p-[.7rem]'>
        <div className='flex flex-col gap-[.82rem] w-1/5'>
          <Image
            src={team[0].image}
            alt='John Smith'
            width={100}
            height={100}
            className='rounded-lg m-auto'
          />
          <div className='flex flex-col gap-1'>
            <p className='text-[#0F1629] font-semibold text-center'>
              {team[0].name}
            </p>
            <p className='text-[#3E424A] font-medium text-center'>
              {team[0].role}
            </p>
          </div>
        </div>
        <div className='w-4/5 m-auto'>
          <p className='text-[#0F1629] text-sm m-auto'>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div> */}
    </>
  );
};

export default TeamCard;
