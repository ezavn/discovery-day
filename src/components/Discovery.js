import React from "react";
import Button from "./commons/Button";
import Slider from "react-slick";
import { usePopup } from "../contexts/popupContext";

const Discovery = () => {
  const { setShow } = usePopup();
  return (
    <section
      id="discovery"
      className="hidden md:block discovery pt-[380px] md:pt-[220px] pb-sectionMB md:pb-section"
    >
      <div className="page-container grid-cols-1 grid md:grid-cols-2 gap-[40px]">
        <div data-aos="fade-right" data-aos-duration="1000">
          <p className="mb-[15px] md:mb-[30px] mt-[20px]">
            Chương trình{" "}
            <span className="font-bold text-blue">DISCOVERY DAY</span> là gì?
          </p>
          <div>
            <p className="mb-[12px]">
              <span className="font-bold text-blue">Discovery Day (DD)</span> là
              chương trình kéo dài 3 giờ đồng hồ giúp người tham gia:
            </p>
            <div>
              <div className="flex items-baseline gap-[17px] mb-[6px]">
                <img srcSet="/icons/check-icon.png 2x" alt="" />
                <p>
                  Hiểu rõ cơ hội phát triển, giá trị của nghề Huấn luyện Doanh
                  nghiệp đối với cá nhân và xã hội.
                </p>
              </div>
              <div className="flex items-baseline gap-[17px] mb-[6px]">
                <img srcSet="/icons/check-icon.png 2x" alt="" />
                <p>Hiểu được hành trình để trở thành 1 NHL thành công</p>
              </div>
              <div className="flex items-baseline gap-[17px]">
                <img srcSet="/icons/check-icon.png 2x" alt="" />
                <p>
                  Được chia sẻ những thách thức và cơ hội với Nghề Huấn luyện
                  Doanh nghiệp hiện nay
                </p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setShow(true)}
            className="mt-[20px] md:mt-[35px] scale"
          >
            ĐĂNG KÝ THAM GIA
          </Button>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <DiscoverySlide></DiscoverySlide>
        </div>
      </div>
    </section>
  );
};

const DiscoverySlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <DiscoveryNext />,
    prevArrow: <DiscoveryPrev />,
  };
  return (
    <div className="discovery-slide">
      <Slider {...settings}>
        <div className="w-[100%] relative">
          <div className="w-[325px] md:w-[470px] absolute z-10 ml-[2px]">
            <img className="w-[100%]" src="/images/discovery-1.png" alt="" />
          </div>
          <div className="w-[300px] h-[250px] md:w-[470px] md:h-[340px] translate-x-[40px] translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] relative">
          <div className="w-[325px] md:w-[470px] h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-2.png"
              alt=""
            />
          </div>
          <div className="w-[300px] h-[250px] md:w-[470px] md:h-[340px] translate-x-[40px] translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] relative">
          <div className="w-[325px] md:w-[470px] h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-3.png"
              alt=""
            />
          </div>
          <div className="w-[300px] h-[250px] md:w-[470px] md:h-[340px] translate-x-[40px] translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] relative">
          <div className="w-[325px] md:w-[470px] h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-4.png"
              alt=""
            />
          </div>
          <div className="w-[300px] h-[250px] md:w-[470px] md:h-[340px] translate-x-[40px] translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] opacity-0">
          <img
            className="w-[100%] h-[298px] md:h-auto"
            src="/images/discovery-1.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

function DiscoveryNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`discovery-next ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

function DiscoveryPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`discovery-prev ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

export default Discovery;
