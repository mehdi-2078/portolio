import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface Item {
  key: string;
  src: string | StaticImageData;
  title: string;
}
interface Props {
  items: Item[];
}

export const SkillItem: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.key}
          className="flex item-centers mx-2 my-2 flex-col text-center px-7 pt-4 pb-4
           justify-around shadow-2xl w-[140px] h-[140px] rounded"
        >
          <Image src={item.src} alt="" />
          <div className="text-[17px] mt-2 ">{item.title}</div>
        </div>
      ))}
    </>
  );
};
