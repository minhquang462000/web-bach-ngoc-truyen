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
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { handleUpdateView } from "@/api/updateViews";

export interface IHomeSlideProps {
  bookRender: IBook[];
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function HomeSlide({ bookRender }: IHomeSlideProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="w-full  rounded-md overflow-hidden  ">
      <div className="w-full max-h-[50vw] lg:h-[280px]   ">
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
          {bookRender.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/truyen/${convertToSlug(item?.name)}-${item?._id}.html`}
              >
                {" "}
                <Image
                  onClick={() => handleUpdateView(item._id)}
                  width={200}
                  height={100}
                  className="w-full  aspect-[3/4] object-cover object-center"
                  src={
                    item.images[1]
                      ? `${DOMAIN}/api/books/${item?.images[1]}`
                      : `${DOMAIN}/api/books/${item?.images[0]}`
                  }
                  alt={item?.name}
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
          {bookRender.map((item, index) => (
            <SwiperSlide key={index}>
              <p className="font-medium md:h-[40px] cursor-pointer  p-2 w-full truncate text-center lg:h-max overflow-hidden md:text-sm lg:text-xs text-xs">
                {item?.name.split(" ", 2).join(" ")}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
