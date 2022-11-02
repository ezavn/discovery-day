import React from "react";
import Heading from "./commons/Heading";

const Journey = () => {
  return (
    <section className="py-sectionMB md:py-section bg-[url('../public/images/journey-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="page-container">
        <Heading>
          HÀNH TRÌNH TRỞ THÀNH NHÀ HUẤN LUYỆN <br />
          CỦA ACTIONCOACH
        </Heading>
        <JourneyItem
          img="/images/jo-1.png"
          title="PRE-TRAINING"
          className="mb-[15px] md:mb-[35px]"
        >
          <p className="mb-[15px]">
            Bạn sẽ nhận được sự đào tạo và hỗ trợ đầy đủ ngay từ đầu, sau khi
            hoàn thành việc ký kết hợp đồng trở thành Nhà huấn luyện.
          </p>
          <p>
            Chương trình Pre-training kéo dài trong vòng 4 tuần cùng với các
            Trainer giàu kinh nghiệm, nhằm trang bị cho Anh/Chị những kiến thức
            nền tảng để chuẩn bị cho việc tham gia khoá đào tạo CTP (Coach
            Transformation Program).
          </p>
        </JourneyItem>
        <JourneyItem
          img="/images/jo-2.png"
          title="KHOÁ ĐÀO TẠO CTP
(COACH TRANSFORMATION PROGRAM)"
          className="mb-[15px] md:mb-[35px]"
        >
          <p className="mb-[15px]">
            Đây là chương trình đào tạo chuyên sâu kéo dài 5 ngày, nhằm trang bị
            cho các Nhà huấn luyện đầy đủ kiến thức và kỹ năng cần thiết để ngay
            lập tức bắt tay vào công việc huấn luyện khách hàng.
          </p>
          <p>
            Sau khoá học, các Nhà huấn luyện sẽ được cấp chứng chỉ để chứng nhận
            đã hoàn thành chương trình đào tạo, và được phép hành nghề huấn
            luyện trong hệ thống ActionCOACH. Nhưng đó chưa phải tất cả!
          </p>
        </JourneyItem>
        <JourneyItem img="/images/jo-3.png" title="POST-TRAINING">
          <p>
            Sau khi hoàn thành khoá đào tạo CTP, trong 90 ngày tiếp theo, Nhà
            huấn luyện sẽ phải hoàn thành KPI do ActionCOACH Toàn Cầu đưa ra để
            được chính thức công nhận vai trò Nhà huấn luyện và được hành nghề
            một cách hợp pháp.
          </p>
        </JourneyItem>
      </div>
    </section>
  );
};

const JourneyItem = ({ img, title, children, className }) => {
  return (
    <div
      data-aos="zoom-out-down"
      data-aos-duration="1000"
      className={`relative flex flex-col md:flex-row items-center h-auto md:h-[294px] ${className}`}
    >
      <div className="hidden md:block h-[243px] w-[130px] flex-shrink-0 translate-x-[30px]">
        <img className="h-[100%] w-[100%] object-cover" src={img} alt="" />
      </div>
      <div className="relative z-10 flex-1 bg-gradient-to-r p-[6px] to-[#00558F] from-[#CD163F] rounded-xl h-[100%]">
        <div className="bg-white rounded-lg h-[100%] text-justify p-[30px] md:p-[50px]">
          <h3 className="font-semibold text-[16px] md:text-[24px] mb-[10px]">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Journey;
