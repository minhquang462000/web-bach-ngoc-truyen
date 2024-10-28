import * as React from "react";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import CardAlreadyStory from "../Card/CardAlreadyStory";
import CardSavedStory from "../Card/CardSavedStory";
export interface IMyBookmarkProps {
  openPopupMyStory: boolean;
  togglePopup: () => void;
  isShowPopup: boolean;
}

export default function MyBookmark(props: IMyBookmarkProps) {
  const { openPopupMyStory, isShowPopup, togglePopup } = props;
  const [tabRender, setTabRender] = useState<string>("truyen-da-doc");
  const renderByTab = () => {
    switch (tabRender) {
      case "truyen-da-doc":
        return (
          <div className="flex flex-col gap-2 px-3">
            <CardAlreadyStory />
          </div>
        );
      case "truyen-da-luu":
        return (
          <div className="flex flex-col gap-2 px-3">
            <CardSavedStory />
          </div>
        );
      case "truyen-da-mo":
        return (
          <div className="flex flex-col gap-2 px-3">
            <p className="font-light text-sm">
              Vui lòng đăng nhập để sử dụng tính năng này!
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className={` absolute w-full overflow-hidden transitionProperty-[max-width] duration-500
           z-20 right-0  lg:shadow-lg lg:shadow-gray-500 bg-white min-h-screen text-center top-0
           max-w-full  px-5 lg:px-4  md:max-w-[600px] lg:max-w-[800px]
           ${openPopupMyStory ? "translate-x-0" : "translate-x-full"} ${
        !isShowPopup && "hidden"
      }
      `}
    >
      <h3 className="my-4 lg:text-start text-sm relative font-bold">
        Tủ truyện{" "}
        <IoClose
          size={20}
          onClick={togglePopup}
          className="absolute -top-2 text-gray-400 hover:text-gray-500 right-0 cursor-pointer"
        />
      </h3>
      <ul className="flex mb-5  bg-[#f1f5f9] rounded-md text-[#68748b] gap-2 p-2 w-full   font-semibold justify-between">
        <li
          onClick={() => setTabRender("truyen-da-doc")}
          className={`px-3 py-[6px] md:w-1/3 cursor-pointer ${
            tabRender === "truyen-da-doc" && "bg-white text-[#128c7e]"
          }`}
        >
          Truyện đã đọc
        </li>
        <li
          onClick={() => setTabRender("truyen-da-luu")}
          className={`px-3 md:w-1/3 py-[6px] cursor-pointer  ${
            tabRender === "truyen-da-luu" && "bg-white text-[#128c7e]"
          }`}
        >
          Truyện đã lưu
        </li>
        <li
          onClick={() => setTabRender("truyen-da-mo")}
          className={`px-3 md:w-1/3 py-[6px] cursor-pointer  ${
            tabRender === "truyen-da-mo" && "bg-white text-[#128c7e]"
          }`}
        >
          Truyện đã mở
        </li>
      </ul>
      {renderByTab()}
    </div>
  );
}
