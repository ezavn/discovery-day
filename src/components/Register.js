import React, { useRef, useState } from "react";

const Register = () => {
  const form = useRef();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    gender: "",
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const { gender, name, email, phone, position, message } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ethannguyen/google_sheets/euCwGKoXqffUAXgH?tabId=Trang tính1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              new Date().toLocaleDateString(),
              gender,
              name,
              email,
              phone,
              position,
              message,
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        gender: "",
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
      setLoad(false);
      alert("Đăng ký thành công!");
    } catch (error) {
      console.log(error);
      alert("Đã có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  return (
    <section
      id="register"
      className="py-sectionMB md:py-section bg-[url('../public/images/register-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="page-container">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center text-[24px] md:text-[32px] text-blueDark font-semibold leading-[1.3] md:mb-[70px] mb-[40px]"
        >
          <span className="text-[32px] md:text-[40px]">ĐĂNG KÝ</span> <br />{" "}
          THAM GIA CHƯƠNG TRÌNH{" "}
          <span className="text-[32px] md:text-[40px] text-red">
            DISCOVERY DAY
          </span>{" "}
          ĐỂ TRẢI NGHIỆM <br />{" "}
          <span className="text-[35px] md:text-[48px]">
            NGÀNH NGHỀ HẤP DẪN HÀNG ĐẦU
          </span>{" "}
          HIỆN NAY
        </h2>
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          className="w-[320px] md:w-[570px] mx-auto"
        >
          <form ref={form} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-[9px]">
              <div>
                <select
                  className="text-sm px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full h-[50px] text-[#77787B]"
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                >
                  <option>Chọn danh xưng (Anh/Chị)</option>
                  <option value="Ông">Ông</option>
                  <option value="Bà">Bà</option>
                </select>
              </div>
              <div className="col-span-2">
                <input
                  className="px-[17px] rounded-[6px] bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px] border border-blue"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nhập Họ và tên"
                  required
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                  id="email"
                  name="email"
                  placeholder="Nhập Email"
                  type="email"
                  value={data.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                  id="phone"
                  name="phone"
                  placeholder="Nhập Số điện thoại"
                  type="phone"
                  required
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <input
                  className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                  id="position"
                  name="position"
                  placeholder="Nghề nghiệp/Chức vụ"
                  type="text"
                  value={data.position}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <textarea
                  className="rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[132px] p-[15px] resize-none"
                  id="message"
                  name="message"
                  placeholder="Để lại lời nhắn cho chúng tôi"
                  value={data.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-center mt-[25px] md:mt-[40px]">
              {load === false ? (
                <button
                  type="submit"
                  className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25);] w-[289px] h-[60px] font-bold rounded-[50px] bg-red text-white border border-white border-solid"
                >
                  ĐĂNG KÝ NGAY
                </button>
              ) : (
                <button className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25);] w-[289px] h-[60px] font-bold rounded-[50px] bg-red text-white border border-white border-solid uppercase inline-flex justify-center items-center">
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx={12}
                      cy={12}
                      r={10}
                      stroke="currentColor"
                      strokeWidth={4}
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  ĐANG GỬI
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
