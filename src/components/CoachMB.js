import React from "react";
import Heading from "./commons/Heading";

const CoachMB = () => {
  return (
    <section className="block md:hidden py-sectionMB">
      <div className="page-container">
        <Heading className="text-[36px] uppercase">
          nhà huấn luyện doanh nghiệp là gì?
        </Heading>
        <p className="text-justify mb-[15px]">
          <strong>Business COACH</strong> - Nhà huấn luyện Doanh nghiệp giúp các
          tổ chức xây dựng một nền tảng vững chắc, cho phép họ đưa ra quyết định
          phù hợp với cấu trúc giá trị của họ. Huấn luyện có thể giúp mang lại
          sự rõ ràng và định hướng cho bất kỳ tổ chức nào, cho dù đó là mục tiêu
          ngắn hạn hay dài hạn.
        </p>
        <p className="text-justify mb-[15px]">
          Khi ngày càng có nhiều người chọn trở thành Doanh nhân, nhu cầu về các
          Nhà huấn luyện doanh nghiệp - những người sẵn sàng hỗ trợ Chủ doanh
          nghiệp cũng tăng với tốc độ nhanh. Theo một khảo sát, có tới{" "}
          <strong>21 TRIỆU DOANH NGHIỆP</strong> đang tìm kiếm một Nhà Huấn
          luyện doanh nghiệp và họ sẵn sàng trả tới $ 1000/giờ.
        </p>
        <p className="italic font-semibold text-justify">
          Vậy bạn đã sẵn sàng khám phá kiến ​​thức và chuẩn bị đủ sự tự tin để
          bắt đầu hành trình của mình với tư cách là một Nhà huấn luyện doanh
          nghiệp thành công có thể giúp bất kỳ doanh nghiệp nào phát triển?
        </p>
        <div>
          <img src="/images/coach.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CoachMB;
