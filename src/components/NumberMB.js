import React from "react";
import Heading from "./commons/Heading";
import Slider from "react-slick";
import { usePopup } from "../contexts/popupContext";

const numbers = [
  {
    id: 1,
    icon: "/icons/number-icon1.png",
    number: "71.000",
    title: "NGƯỜI",
    desc: "Đang theo đuổi nghề Huấn luyện chuyên nghiệp trên toàn thế giới (Theo ICF).",
  },
  {
    id: 2,
    icon: "/icons/number-icon2.png",
    number: "20",
    title: "TỶ ĐÔ",
    desc: "Giá trị thị trường ngành Huấn luyện doanh nghiệp vào năm 2022",
  },
  {
    id: 3,
    icon: "/icons/number-icon3.png",
    number: "HƠN 92%",
    title: "CHỦ DOANH NGHIỆP NHỎ",
    desc: "Tán thành việc thuê một Nhà huấn luyện doanh nghiệp.",
  },
  {
    id: 4,
    icon: "/icons/number-icon4.png",
    number: "HƠN 60%",
    title: "GIÁM ĐỐC ĐIỀU HÀNH",
    desc: "Đồng ý rằng hoạt động Huấn luyện đã giúp họ xây dựng mục tiêu tốt hơn.",
  },
];

const NumberMB = () => {
  const { setShow } = usePopup();
  return (
    <section className="block pb-sectionMB md:hidden">
      <div className="page-container">
        <Heading className="text-[36px] uppercase">
          NHỮNG CON SỐ "BIẾT NÓI" VỀ NGÀNH HUẤN LUYỆN DOANH NGHIỆP
        </Heading>
        <div className="grid grid-cols-1 gap-[15px] mb-[40px]">
          {numbers.length > 0 &&
            numbers.map((item) => (
              <NumberItem key={item.id} item={item}></NumberItem>
            ))}
        </div>
        <h2
          id="discovery"
          className="font-semibold text-[24px] uppercase text-center"
        >
          Chương trình{" "}
          <span className="font-bold text-blue">DISCOVERY DAY</span> là gì?
        </h2>
        <div className="page-container grid-cols-1 grid md:grid-cols-2 gap-[40px]">
          <div>
            <p className="mb-[15px] md:mb-[30px] mt-[20px]">
              Chương trình{" "}
              <span className="font-bold text-blue">DISCOVERY DAY</span> là gì?
            </p>
            <div>
              <p className="mb-[12px]">
                <span className="font-bold text-blue">Discovery Day (DD)</span>{" "}
                là chương trình kéo dài 3 giờ đồng hồ giúp người tham gia:
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
          </div>
          <div>
            <DiscoverySlide></DiscoverySlide>
          </div>
        </div>
        <div className="mt-[30px] mx-[15px] md:mx-[0] bg-gradient-to-r p-[6px] to-[#00558F] from-[#CD163F] rounded-xl">
          <div className="w-[100%] flex flex-col md:flex-row bg-white rounded-lg">
            <div className="px-[45px] py-[30px] md:py-[60px] bg-red rounded-tl-[6px] rounded-tr-[6px] md:rounded-tr-[0px]  md:rounded-bl-[6px]">
              <p className="text-[28px] font-semibold text-white">
                ĐỐI TƯỢNG <br /> THAM GIA
              </p>
            </div>
            <div className="flex flex-col md:flex-row p-[15px] md:p-[0px] gap-[20px] md:gap-[40px] flex-1 justify-center">
              <div className="flex items-center gap-[10px]">
                <div className="flex-shrink-0 w-[100px] h-[100px] rounded-[50%] bg-red flex items-center justify-center">
                  <div className="h-[50px] w-[50px]">
                    <img
                      className="w-[100%] h-[100%] object-contain"
                      srcSet="/icons/object-icon1.png 2x"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-blueDark">
                    Tốt nghiệp hoặc có <br /> kinh nghiệm trong ngành <br />
                    <span className="font-bold">
                      Tài chính, Kế toán & <br /> Phân tích dữ liệu
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="flex-shrink-0 w-[100px] h-[100px] rounded-[50%] bg-red flex items-center justify-center">
                  <div className="h-[57px] w-[57px]">
                    <img
                      className="w-[100%] h-[100%] object-contain"
                      srcSet="/icons/object-icon2.png 2x"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-blueDark">
                    Đã và đang là <br />
                    <span className="font-bold">Chủ doanh nghiệp</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setShow(true)}
          className="cursor-pointer relative gap-[20px] p-[17px] rounded-[6px] bg-gradient-to-r to-[#00558F] from-[#CD163F] flex flex-col mt-[40px]"
        >
          <div className="flex gap-[20px]">
            <div className="w-[63px] h-[63px]">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="/icons/edit-icon.png"
                alt=""
              />
            </div>
            <h3 className="font-bold text-[28px] leading-[1] text-white uppercase">
              Đăng ký <br /> tham gia
            </h3>
          </div>
          <p className="font-medium text-white">
            Chương trình <span className="font-bold">DISCOVERY DAY</span> <br />{" "}
            Ngày trải nghiệm Nghề huấn luyện <br /> Doanh nghiệp của ActionCOACH
            Việt Nam
          </p>
          <div className="absolute right-0 top-[40px] w-[70px] h-[88px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/icons/mouse-icon.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const NumberItem = ({ item }) => {
  return (
    <div className="bg-gradient-to-br p-[6px] from-[#00558F] to-[#CD163F] rounded-xl">
      <div className="flex flex-col items-center gap-[20px] text-center justify-between h-full bg-white rounded-lg pb-[40px] pt-[28px] px-[15px]">
        <div className="h-[68px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            srcSet={`${item.icon} 2x`}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[32px] font-bold text-red">{item.number}</h3>
          <p className="font-semibold text-blueDark">{item.title}</p>
        </div>
        <p className="text-blueDark">{item.desc}</p>
      </div>
    </div>
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
          <div className="w-[285px] md:w-[470px] h-[235px] md:h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-1.png"
              alt=""
            />
          </div>
          <div className="w-[265px] h-[250px] md:w-[470px] md:h-[340px] translate-x-[40px] translate-y-[35px] md:translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] relative">
          <div className="w-[285px] md:w-[470px] h-[235px] md:h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-2.png"
              alt=""
            />
          </div>
          <div className="w-[265px] h-[250px] md:w-[470px] md:h-[235px] md:h-[340px] translate-x-[40px] translate-y-[35px] md:translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] relative">
          <div className="w-[285px] md:w-[470px] h-[235px] md:h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-3.png"
              alt=""
            />
          </div>
          <div className="w-[265px] h-[250px] md:w-[470px] md:h-[235px] md:h-[340px] translate-x-[40px] translate-y-[35px] md:translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
            <p className="text-[14px] text-white">
              Các kỳ <span className="font-bold">DISCOVERY DAY</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] relative">
          <div className="w-[285px] md:w-[470px] h-[235px] md:h-[340px] absolute z-10 ml-[2px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/images/discovery-4.png"
              alt=""
            />
          </div>
          <div className="w-[265px] h-[250px] md:w-[470px] md:h-[235px] md:h-[340px] translate-x-[40px] translate-y-[35px] md:translate-y-[50px] rounded-[14px] bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex items-end justify-center pb-[15px]">
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

export default NumberMB;
