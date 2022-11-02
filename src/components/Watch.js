import React from "react";
import Heading from "./commons/Heading";

const watchs = [
  {
    id: 1,
    img: "/images/tes1.png",
    link: "https://www.youtube.com/watch?v=LqFnJo9IWFY&list=PLY9mZARXM-eZYZ7a-WSz2TIKl9uk7CLs0&index=16",
    name: "COACH TOMMY NGUYỄN HỮU NGỌC",
    // position: "GIÁM ĐỐC CT TNHH SMART CONTENT",
  },
  {
    id: 2,
    img: "/images/tes2.png",
    link: "https://www.youtube.com/watch?v=Ds8MYD910ms&list=PLY9mZARXM-eZYZ7a-WSz2TIKl9uk7CLs0&index=17",
    name: "COACH LOTUS PHẠM THỊ BÍCH LIÊN",
    // position: "GIÁM ĐỐC CT TNHH SMART CONTENT",
  },
  {
    id: 3,
    img: "/images/tes3.png",
    link: "https://www.youtube.com/watch?v=8VBCWbgeSjk&list=PLY9mZARXM-eZYZ7a-WSz2TIKl9uk7CLs0&index=18",
    name: "COACH RICHARD VŨ ĐỨC TRỌNG",
    // position: "GIÁM ĐỐC CT TNHH SMART CONTENT",
  },
];

const Watch = () => {
  return (
    <section id="blog" className="watch py-sectionMB md:py-section">
      <div className="mx-[30px]">
        <Heading>
          HÃY XEM NHỮNG HỌC VIÊN NÓI GÌ <br className="hidden md:block" /> SAU
          KHI THAM GIA CHƯƠNG TRÌNH DISCOVERY DAY
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {watchs.map((item) => (
            <WatchItem key={item.id} item={item}></WatchItem>
          ))}
        </div>
      </div>
    </section>
  );
};

const WatchItem = ({ item: { link, img, name, position } }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="relative inline-block h-[180px] md:h-[280px] group"
      rel="noreferrer"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <img
        className="absolute z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        srcSet="/icons/play-icon.png 2x"
        alt=""
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)]"></div>
      <img className="w-[100%] h-[100%] object-cover" src={img} alt="" />
      <div className="md:opacity-0 absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white p-[28px] flex flex-col justify-end hover:opacity-100 transition duration-500">
        <p className="text-[16px] md:text-[20px]">{name}</p>
        <p className="text-[12px] md:text-[16px]">{position}</p>
      </div>
    </a>
  );
};

export default Watch;
