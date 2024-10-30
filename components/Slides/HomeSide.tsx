"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
// import required modules
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";

const render = [
  {
    img: require("@/public/images/image_test/img_slide1.jpg").default,
    title: "Thọ Khang",
  },
  {
    img: require("@/public/images/image_test/img_slide2.jpg").default,
    title: "Tri Huyện",
  },
  {
    img: require("@/public/images/image_test/img_slide3.jpg").default,
    title: "Yêu nữ",
  },
  {
    img: require("@/public/images/image_test/img_slide4.jpg").default,
    title: "Văn Âm",
  },
];
export interface IHomeSlideProps { }

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
              <Link href={`/truyen/${item.title}`}>
                {" "}
                <Image
                  className="w-full  h-full object-cover object-center"
                  src={item.img}
                  alt={item.title}
                />
              </Link>
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
              <button className="font-medium md:h-[40px] lg:h-max overflow-hidden md:text-sm lg:text-xs text-xs">{item.title}</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
