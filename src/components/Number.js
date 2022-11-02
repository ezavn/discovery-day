import React from "react";
import { usePopup } from "../contexts/popupContext";
import Heading from "./commons/Heading";

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

const Number = () => {
  const { setShow } = usePopup();
  return (
    <section className="hidden md:block number pt-sectionMB md:pt-section pb-[100px] bg-[url('../public/images/number-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative page-container">
        <Heading>
          NHỮNG CON SỐ "BIẾT NÓI" <br /> VỀ NGÀNH HUẤN LUYỆN DOANH NGHIỆP
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] md:gap-[30px] mb-[50px]">
          {numbers.length > 0 &&
            numbers.map((item) => (
              <NumberItem key={item.id} item={item}></NumberItem>
            ))}
        </div>
        <Heading className="block md:hidden">
          NHÀ HUẤN LUYỆN DOANH NGHIỆP LÀ GÌ?
        </Heading>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="content md:ml-auto md:w-[700px] mb-[60px] md:mb-[90px] text-justify"
        >
          <p className="mb-[30px]">
            Business COACH - Nhà huấn luyện Doanh nghiệp giúp các tổ chức xây
            dựng một nền tảng vững chắc, cho phép họ đưa ra quyết định phù hợp
            với cấu trúc giá trị của họ. Huấn luyện có thể giúp mang lại sự rõ
            ràng và định hướng cho bất kỳ tổ chức nào, cho dù đó là mục tiêu
            ngắn hạn hay dài hạn.
          </p>
          <p className="mb-[30px]">
            Khi ngày càng có nhiều người chọn trở thành Doanh nhân, nhu cầu về
            các Nhà huấn luyện doanh nghiệp - những người sẵn sàng hỗ trợ Chủ
            doanh nghiệp cũng tăng với tốc độ nhanh. Theo một khảo sát, có tới
            21 TRIỆU DOANH NGHIỆP đang tìm kiếm một Nhà Huấn luyện doanh nghiệp
            và họ sẵn sàng trả tới $ 1000/giờ.{" "}
          </p>
          <p className="mb-[40px] md:mb-[80px]">
            Vậy bạn đã sẵn sàng khám phá kiến ​​thức và chuẩn bị đủ sự tự tin để
            bắt đầu hành trình của mình với tư cách là một Nhà huấn luyện doanh
            nghiệp thành công có thể giúp bất kỳ doanh nghiệp nào phát triển?
          </p>
          <div
            onClick={() => setShow(true)}
            className="cursor-pointer relative items-center gap-[20px] p-[17px] flex rounded-[100px] bg-gradient-to-r to-[#00558F] from-[#CD163F]"
          >
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
            <p className="hidden font-medium text-white md:block">
              Chương trình <span className="font-bold">DISCOVERY DAY</span>{" "}
              <br /> Ngày trải nghiệm Nghề huấn luyện <br /> Doanh nghiệp của
              ActionCOACH Việt Nam
            </p>
            <div className="absolute right-0 top-[40px] w-[70px] h-[88px] mouse">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="/icons/mouse-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="mx-[15px] md:mx-[0] absolute left-0 right-0 bg-gradient-to-r p-[6px] to-[#00558F] from-[#CD163F] rounded-xl"
        >
          <div className="w-[100%] flex flex-col md:flex-row bg-white rounded-lg">
            <div className="relative px-[45px] py-[30px] md:py-[60px] bg-red rounded-tl-[6px] rounded-tr-[6px] md:rounded-tr-[0px]  md:rounded-bl-[6px] has-triangle">
              <p className="text-[36px] font-semibold text-white">
                ĐỐI TƯỢNG <br /> THAM GIA
              </p>
            </div>
            <div className="flex flex-col md:flex-row p-[20px] md:p-[0px] gap-[20px] md:gap-[40px] flex-1 justify-center">
              <div className="flex items-center gap-[25px]">
                <div className="w-[100px] h-[100px] rounded-[50%] bg-red flex items-center justify-center">
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
              <div className="flex items-center gap-[25px]">
                <div className="w-[100px] h-[100px] rounded-[50%] bg-red flex items-center justify-center">
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
      </div>
    </section>
  );
};

const NumberItem = ({ item }) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="bg-gradient-to-br p-[6px] from-[#00558F] to-[#CD163F] rounded-xl"
    >
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

export default Number;
