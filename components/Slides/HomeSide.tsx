"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";

const render = [
  {
    img: "https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fslider%2FMOuZcxiTCdFXT26qVnpim3wn52jvSzY8ZnxuJyV3.jpg&w=640&q=75",
    title: "Thọ Khang",
  },
  {
    img: "https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fslider%2FvGDmaXvrMqpzkIB1FTOy2IXWoQOhOnOhrcUKxiCJ.jpg&w=640&q=75",
    title: "Tri Huyện",
  },
  {
    img: "https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fslider%2FyVSs1go89f28O6ONV8VSVX5Z0U4VUkv6Ff9WlAEW.jpg&w=640&q=75",
    title: "Yêu nữ",
  },
  {
    img: "https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fslider%2Ft5XuX5snzhE7AFlkho8sGD0Hfeiq9RxUHdKXIUji.jpg&w=640&q=75",
    title: "Văn Âm",
  },
];
export interface IHomeSlideProps {}

export default function HomeSlide(props: IHomeSlideProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="w-full h-full  rounded-md overflow-hidden  ">
      <div className="w-full lg:h-[90%]">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Autoplay, Thumbs]}
          className="myImgHomeSlide"
        >
          {render.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full  h-full object-cover object-center"
                src={item.img}
                alt={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:h-[10%]">
        <Swiper
          onSwiper={setThumbsSwiper}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Autoplay, Thumbs]}
          className="myTitleHomeSlide"
        >
          {render.map((item, index) => (
            <SwiperSlide key={index}>
              <button className="font-medium text-xs">
                {item.title}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
