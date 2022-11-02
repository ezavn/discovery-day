import React from "react";

const Footer = () => {
  return (
    <section className="bg-blueDark md:py-section py-sectionMB">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[50px]">
          <div>
            <div className="mb-[20px] w-[277px]">
              <img
                className="w-[100%] object-cover"
                src="/images/footer-logo.png"
                alt=""
              />
            </div>
            <p className="text-[13px] text-white">
              <span className="text-[20px] font-bold">ActionCOACH VIETNAM</span>{" "}
              – <br />
              XÂY DỰNG THẾ GIỚI THỊNH VƯỢNG THÔNG QUA TÁI <br /> ĐÀO TẠO DOANH
              NGHIỆP
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-[24px] mb-[15px]">
              THÔNG TIN LIÊN HỆ
            </h3>
            <p className="mb-[10px]">
              <span className="font-bold">Địa chỉ:</span> 87 – 89 Hồ Bá Kiện,
              Phường 15, Quận 10, Thành Phố Hồ Chí Minh, Việt Nam
            </p>
            <p className="mb-[10px]">
              <span className="font-bold">Email:</span> info@actioncoach.vn
            </p>
            <p>
              <span className="font-bold">Hotline:</span> (+84) 2871077979 –
              Line 3
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-[24px] mb-[15px]">FACEBOOK</h3>
            <div>
              <a
                href="https://www.facebook.com/actioncoachvietnam"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/facebook.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
