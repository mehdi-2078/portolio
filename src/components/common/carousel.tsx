import { useState } from 'react';

// @ts-ignore
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleReadMore } from './titleReadMore';
import { data } from '../../container/homePage/Skills/data';

import Image from 'next/image';

export const MyCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    className: 'py-10 mt-10',
    slidesToShow: 5,
    centerMode: true,
    // @ts-ignore
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-10/12 md:w-[80%] pb-8 pt-[80px] mx-auto">
        <TitleReadMore text="My Projects" />
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`!w-[70%] bg-white mx-auto text-center transition-transform duration-700 ${
                index === imgIndex
                  ? 'scale-x-[1.6] pb-20 pt-20 scale-y-[1.5] opacity-100'
                  : 'scale-x-[1.1] pb-6 pt-8 scale-y-[1.1] opacity-40 '
              }
              `}
            >
              <div
                className="px-10 border-red-600 w-[90%] rounded-xl bg-red-100 h-[180px]
               flex justify-center items-center mx-auto"
              >
                <Image src={item.src} alt="gg" />
              </div>
              <p className="text-black font-medium mt-1">portfolio</p>
              <div className="text-black flex justify-between mx-4 mt-3 text-xs">
                <span>1402</span>
                <span>more</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
