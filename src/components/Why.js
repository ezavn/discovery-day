import React from "react";
import Heading from "./commons/Heading";

const Why = () => {
  return (
    <section className="why md:py-section py-sectionMB bg-[#F7F9FB]">
      <div className="page-container">
        <Heading className="mb-[15px]">
          TẠI SAO NÊN TRỞ THÀNH <br />
          NHÀ HUẤN LUYỆN DOANH NGHIỆP CỦA ACTIONCOACH?
        </Heading>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-[40px]"
        >
          ActionCOACH là thương hiệu huấn luyện doanh nghiệp hàng đầu thế giới,
          được Brad Sugars thành lập năm 1993 tại Brisbane, Australia và bắt đầu
          được nhượng quyền vào năm 1997
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[15px] md:gap-[30px]">
          <WhyItem icon="/icons/why-icon1.png">
            <p className="font-extrabold text-[20px] md:text-[32px]">29 NĂM</p>
            <p className="text-[12px] md:text-[16px]">PHÁT TRIỂN</p>
          </WhyItem>
          <WhyItem icon="/icons/why-icon2.png">
            <p className="text-[12px] md:text-[16px]">
              <span className="font-extrabold text-[20px] md:text-[32px]">
                +1200
              </span>{" "}
              VĂN PHÒNG <br />
              TẠI HƠN{" "}
              <span className="font-extrabold text-[20px] md:text-[32px]">
                70
              </span>{" "}
              QUỐC GIA
            </p>
          </WhyItem>
          <WhyItem icon="/icons/why-icon3.png">
            <p className="text-[12px] md:text-[16px]">
              ĐỘI NGŨ HƠN{" "}
              <span className="font-extrabold text-[20px] md:text-[32px]">
                1200
              </span>{" "}
              <br />
              NHÀ HUẤN LUYỆN <br />
              KHẮP THẾ GIỚI{" "}
            </p>
          </WhyItem>
          <WhyItem icon="/icons/why-icon4.png">
            <p className="text-[12px] md:text-[16px]">
              Huấn luyện cho <br />{" "}
              <span className="font-extrabold text-[20px] md:text-[32px]">
                >15.000
              </span>{" "}
              Chủ doanh nghiệp <br /> mỗi tuần{" "}
            </p>
          </WhyItem>
          <WhyItem icon="/icons/why-icon5.png">
            <p className="text-[12px] md:text-[16px]">
              <span className="font-extrabold text-[20px] md:text-[32px]">
                97%
              </span>{" "}
              <br /> Khách hàng muốn giới thiệu{" "}
              <br className="hidden md:block" /> ActionCOACH cho bạn bè hoặc{" "}
              <br className="hidden md:block" /> cộng sự kinh doanh.
            </p>
          </WhyItem>
          <WhyItem icon="/icons/why-icon6.png">
            <p className="text-[12px] md:text-[16px]">
              <span className="font-extrabold text-[18px] md:text-[24px]">
                THU NHẬP HẤP DẪN
              </span>{" "}
              <br /> Mức thu nhập <br className="block md:hidden" /> dao động từ{" "}
              <br />
              <span className="font-extrabold text-[18px] md:text-[24px]">
                10.000
              </span>{" "}
              USD –{" "}
              <span className="font-extrabold text-[18px] md:text-[24px]">
                85.000
              </span>{" "}
              USD/tháng.
            </p>
          </WhyItem>
        </div>
      </div>
    </section>
  );
};

const WhyItem = ({ icon, children }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1000"
      className="bg-gradient-to-tr to-[#00558F] from-[#CD163F] flex flex-col rounded-[38px] items-center px-[10px] py-[30px] md:py-[50px]"
    >
      <img
        className="w-[50px] h-[50px] md:w-[97px] md:h-[97px] mb-[15px] md:mb-[45px]"
        srcSet={`${icon} 2x`}
        alt=""
      />
      <div className="text-center text-white">{children}</div>
    </div>
  );
};

export default Why;
