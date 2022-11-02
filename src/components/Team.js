import React from "react";
import Slider from "react-slick";

const teams = [
  {
    id: 4,
    img: "/images/leo.png",
    name: "LeO Võ Thái Lâm",
    coach: "Business COACH",
  },
  {
    id: 26,
    img: "/images/simon2.png",
    name: "SIMON",
    coach: "Business COACH",
  },

  {
    id: 20,
    img: "/images/jenny.png",
    name: "JENNY",
    coach: "Business COACH",
  },
  {
    id: 3,
    img: "/images/kaka.png",
    name: "Kaka Lê Ngọc Đăng",
    coach: "Business COACH",
  },
  {
    id: 1,
    img: "/images/david.png",
    name: "David Trần Xuân Hoà",
    coach: "Business COACH",
  },
  {
    id: 31,
    img: "/images/vivian.png",
    name: "VIVIAN",
    coach: "Business COACH",
  },
  {
    id: 6,
    img: "/images/neo.png",
    name: "NeO Nguyễn Đình Bảo",
    coach: "Business COACH",
  },
  {
    id: 24,
    img: "/images/maya.png",
    name: "MAYA",
    coach: "Business COACH",
  },
  {
    id: 7,
    img: "/images/rita.png",
    name: "Rita Tô Quý Ngọc Châu",
    coach: "Business COACH",
  },
  {
    id: 28,
    img: "/images/cherry.png",
    name: "CHERRY",
    coach: "Business COACH",
  },
  {
    id: 8,
    img: "/images/theo.png",
    name: "TheO Vũ Bá Thế",
    coach: "Business COACH",
  },
  {
    id: 18,
    img: "/images/lan.png",
    name: "LAN TONG",
    coach: "Business COACH",
  },
  {
    id: 9,
    img: "/images/tamy.png",
    name: "Tamy Lê Thị Ngọc Thảo",
    coach: "Business COACH",
  },
  {
    id: 19,
    img: "/images/roxana.png",
    name: "ROXANA",
    coach: "Business COACH",
  },
  {
    id: 11,
    img: "/images/tracy.png",
    name: "TRACY Thanh Hà",
    coach: "Business COACH",
  },
  {
    id: 21,
    img: "/images/donnie.png",
    name: "DONNIE",
    coach: "Business COACH",
  },
  {
    id: 12,
    img: "/images/jolie.png",
    name: "JOLIE Nhật Lý",
    coach: "Business COACH",
  },
  {
    id: 25,
    img: "/images/collins.png",
    name: "COLLINS",
    coach: "Business COACH",
  },
  {
    id: 13,
    img: "/images/vova.png",
    name: "VOVA Lê Việt Chuẩn",
    coach: "Business COACH",
  },
  {
    id: 14,
    img: "/images/david2.png",
    name: "DAVID",
    coach: "Business COACH",
  },
  {
    id: 15,
    img: "/images/hannah.png",
    name: "HANNAH",
    coach: "Business COACH",
  },
  {
    id: 16,
    img: "/images/simon.png",
    name: "SIMON",
    coach: "Business COACH",
  },
  {
    id: 22,
    img: "/images/rose.png",
    name: "ROSE",
    coach: "Business COACH",
  },
  {
    id: 23,
    img: "/images/nancy.png",
    name: "NANCY",
    coach: "Business COACH",
  },
  {
    id: 2,
    img: "/images/emmy.png",
    name: "Emmy Lê Thị Hải",
    coach: "Business COACH",
  },
  {
    id: 26,
    img: "/images/simon2.png",
    name: "SIMON",
    coach: "Business COACH",
  },
  {
    id: 27,
    img: "/images/dina.png",
    name: "DINA",
    coach: "Business COACH",
  },
  {
    id: 29,
    img: "/images/kevin.png",
    name: "KEVIN",
    coach: "Business COACH",
  },
  {
    id: 5,
    img: "/images/martin.png",
    name: "Martin Nguyễn Hải Đăng",
    coach: "Business COACH",
  },
  {
    id: 30,
    img: "/images/taylor.png",
    name: "TAYLOR",
    coach: "Business COACH",
  },
  {
    id: 32,
    img: "/images/helen.png",
    name: "HELEN",
    coach: "Business COACH",
  },
  {
    id: 33,
    img: "/images/jolie2.png",
    name: "JOLIE",
    coach: "Business COACH",
  },
  {
    id: 34,
    img: "/images/julia.png",
    name: "JULIA",
    coach: "Business COACH",
  },
  {
    id: 35,
    img: "/images/stephan.png",
    name: "STEPHAN",
    coach: "Business COACH",
  },
  {
    id: 36,
    img: "/images/brian.png",
    name: "BRIAN",
    coach: "Business COACH",
  },
  {
    id: 37,
    img: "/images/kevin2.png",
    name: "KEVIN",
    coach: "Business COACH",
  },
];

const Team = () => {
  return (
    <section className="team md:py-section py-sectionMB bg-[url('../public/images/team-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-[15px] md:ml-[50px] grid grid-cols-1 md:grid-cols-3">
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="font-semibold text-[24px] md:text-[38px] leading-[1.2] text-white col-span-1"
        >
          ĐỘI NGŨ NHÀ <br />{" "}
          <span className="text-[40px] md:text-[64px]">HUẤN LUYỆN</span> <br />{" "}
          DOANH NGHIỆP CỦA <br />{" "}
          <span className="text-[40px] md:text-[64px]">ACTIONCOACH</span> <br />{" "}
          <span className="text-[40px] md:text-[64px]">VIỆT NAM</span>
        </h2>
        <TeamSlide></TeamSlide>
      </div>
    </section>
  );
};

const TeamSlide = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <TeamNext />,
    prevArrow: <TeamPrev />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="col-span-2 team-slide md:ml-[50px] mt-[40px] md:mt-[0px]"
    >
      <Slider {...settings}>
        {teams.map((item) => (
          <TeamItem key={item.id} item={item}></TeamItem>
        ))}
      </Slider>
    </div>
  );
};

const TeamItem = ({ item: { img, name, coach } }) => {
  return (
    <div className="relative h-[450px] md:h-[352px] mr-[15px]">
      <img
        className="h-[100%] w-[100%] object-cover rounded-tl-[20px] rounded-tr-[20px]"
        src={img}
        alt=""
      />
      <div className="py-[20px] px-[8px] absolute bottom-[60px] left-0 bg-gradient-to-br to-[#00558F] from-[#CD163F] right-0 text-white text-center rounded-bl-[20px] rounded-br-[20px]">
        <p className="font-semibold text-[14px]">{name}</p>
        <p className="text-[12px] font-semibold">{coach}</p>
      </div>
    </div>
  );
};

function TeamNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`team-next ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

function TeamPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`team-prev ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

export default Team;
