import React from "react";
import { usePopup } from "../contexts/popupContext";

const Quiz = () => {
  return (
    <section className="bg-blueDark py-section pb-[40px]">
      <div className="relative page-container">
        <div className="left-[50%] translate-x-[-50%] top-[-120px] md:top-[-140px] w-[100px] h-[100px] md:w-[136px] md:h-[136px] bg-blueDark rounded-[50%] absolute flex items-center justify-center">
          <div className="md:h-[60px] h-[40px]">
            <img
              className="h-[100%] object-cover"
              srcSet="/icons/quiz-icon.png 2x"
              alt=""
            />
          </div>
        </div>
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-center text-white mb-[28px]"
        >
          Làm bài trắc nghiệm huấn luyện viên kinh doanh nhanh chóng, dễ dàng và
          xem liệu <br /> Huấn luyện viên doanh nghiệp có phù hợp với bạn không
        </p>
        <div className="mx-auto text-center">
          <a
            data-aos="fade-right"
            data-aos-duration="1000"
            className="scale2 inline-block bg-blue px-[40px] py-[12px] font-bold text-white uppercase rounded-[50px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfi18aRHbJv-m7UIIToidKs3_XWain4LxAupKp6TzXaaZ6Hdg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Làm trắc nghiệm
          </a>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
