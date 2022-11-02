import React from "react";
import Heading from "./commons/Heading";

const Become = () => {
  return (
    <section className="bg-gradient-to-r p-[6px] to-[#00558F] from-[#CD163F] md:py-section py-sectionMB">
      <div className="page-container">
        <Heading white>
          Để Trở Thành Người Giỏi Nhất Thế Giới,{" "}
          <br className="hidden md:block" /> Bạn Cần Học Hỏi Từ Người Giỏi{" "}
          <br className="block md:hidden" /> Nhất Thế Giới
        </Heading>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-justify text-white md:text-center"
        >
          Đừng tự hỏi liệu nghề Huấn luyện có dành cho bạn không!!!{" "}
          <br className="hidden md:block" /> Bạn không cần có nhiều kinh nghiệm
          kinh doanh để bắt đầu sự nghiệp của mình với tư cách là một Nhà huấn
          luyện doanh nghiệp. Điều bạn cần <br className="hidden md:block" /> là
          sẵn sàng học hỏi và phát triển bản thân, tận hưởng thành công trong sự
          nghiệp của mình và có niềm đam mê giúp đỡ người khác.
        </p>
      </div>
    </section>
  );
};

export default Become;
