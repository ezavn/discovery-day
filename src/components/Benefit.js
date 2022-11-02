import React from "react";
import Heading from "./commons/Heading";
import Slider from "react-slick";

const benefits = [
  {
    id: 1,
    img: "/images/benefit-1.png",
    title: "LÀM CHỦ THỜI GIAN & TIỀN BẠC",
    desc: "Sở hữu Cơ hội làm chủ thời gian và tiền bạc với tư cách là Nhà huấn luyện doanh nghiệp.",
  },
  {
    id: 2,
    img: "/images/benefit-2.png",
    title: "ĐƯỢC GHI NHẬN TOÀN CẦU",
    desc: "Được nâng cao Uy tín và Thương hiệu cá nhân khi thuộc về một Tổ chức toàn cầu – Tổ chức Huấn luyện Doanh nghiệp số 1 thế giới ActionCOACH.",
  },
  {
    id: 3,
    img: "/images/benefit-3.png",
    title: "KHÔNG NGỪNG HỌC TẬP, PHÁT TRIỂN CÙNG ĐAM MÊ",
    desc: "Liên tục được trang bị, cập nhật kiến thức với đầy đủ hệ thống, công cụ đã được chứng minh là hiệu quả để phục vụ cho công việc huấn luyện các chủ doanh nghiệp.",
  },
  {
    id: 4,
    img: "/images/benefit-4.png",
    title: "SỞ HỮU CUỘC SỐNG TRÀN ĐẦY Ý NGHĨA",
    desc: "Làm cho cuộc sống trở nên ý nghĩa hơn khi giúp đỡ thành công các Chủ doanh nghiệp. Các doanh nghiệp thành công đó cũng chính là thành công của Nhà huấn luyện.",
  },
  {
    id: 5,
    img: "/images/benefit-1.png",
    title: "SỞ HỮU CƠ HỘI TRỞ THÀNH NHÀ ĐẦU TƯ THỊNH VƯỢNG MÀ KHÔNG BẰNG TIỀN",
    desc: "",
  },
  {
    id: 6,
    img: "/images/benefit-5.png",
    title: "ĐƯỢC HUẤN LUYỆN THÊM VỀ CÁC KỸ NĂNG SỐNG",
    desc: "Huấn luyện thêm về kỹ năng sống để giúp khách hàng xác định RÕ RÀNG những điều họ THỰC SỰ mong muốn, cũng như tìm lại BẢN THÂN để họ có được một cuộc sống CÓ Ý NGHĨA.",
  },
];

const Benefit = () => {
  return (
    <section
      id="benefit"
      className="py-sectionMB md:py-section benefit bg-[url('../public/images/benefit-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="page-container">
        <Heading white>
          LỢI ÍCH KHI TRỞ THÀNH <br /> NHÀ HUẤN LUYỆN DOANH NGHIỆP CỦA
          ACTIONCOACH
        </Heading>
        <BenefitSlide></BenefitSlide>
      </div>
    </section>
  );
};

const BenefitSlide = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BenefitNext />,
    prevArrow: <BenefitPrev />,
  };
  return (
    <div data-aos="flip-up" data-aos-duration="1000" className="benefit-slide">
      <Slider {...settings}>
        {benefits.map((item) => (
          <div key={item.id} className="benefit-item">
            <div className="benefit-img">
              <img src={item.img} alt="" />
            </div>
            <div className="benefit-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function BenefitNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`benefit-next ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

function BenefitPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`benefit-prev ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

export default Benefit;
