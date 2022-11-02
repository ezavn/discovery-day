import React, { useRef, useState } from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupRegister = () => {
  const form = useRef();
  const { show, setShow } = usePopup();
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
    <div>
      {!!show && (
        <div className="bg-[rgba(0,0,0,0.3)] fixed inset-0 z-[9999999] py-[20px]">
          <div className="flex flex-col md:flex-row w-[340px] md:w-[930px] mx-auto h-[630px] md:h-[680px] items-center bg-white rounded-[8px]">
            <div className="h-[100%] flex-shrink-0 hidden md:block">
              <img
                className="h-[100%] rounded-tl-[8px] rounded-bl-[8px]"
                src="/images/popup-1.png"
                alt=""
              />
            </div>
            <div className="flex-1 p-[20px] md:p-[50px] h-[100%] relative">
              <div
                onClick={() => setShow(false)}
                className="absolute top-[20px] right-[20px] z-20 w-[15px] h-[15px] cursor-pointer"
              >
                <img src="/icons/close-icon.png" alt="" />
              </div>
              <h3 className="font-bold leading-[1.2] text-center mb-[10px] md:mb-[20px]">
                <span className="text-[24px] text-blue">ĐĂNG KÝ</span> <br />{" "}
                THAM GIA CHƯƠNG TRÌNH <br />{" "}
                <span className="text-[32px] md:text-[48px] text-red">
                  DISCOVERY DAY
                </span>
              </h3>
              <div>
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
                        className="rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[100px] p-[15px] resize-none"
                        id="message"
                        name="message"
                        placeholder="Để lại lời nhắn cho chúng tôi"
                        value={data.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-[20px]">
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
                          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        ĐANG GỬI
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupRegister;
