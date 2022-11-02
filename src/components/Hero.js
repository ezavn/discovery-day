import React from "react";
import { usePopup } from "../contexts/popupContext";
import Button from "./commons/Button";

const Hero = () => {
  const { setShow } = usePopup();
  return (
    <section className="mt-[82px] md:mt-[100px] flex items-end justify-center hero bg-[url('../public/images/banner-mobile.png')] md:bg-[url('../public/images/banner.png')] bg-cover bg-bottom md:bg-center bg-no-repeat h-[880px] md:h-[660px]">
      <Button
        onClick={() => setShow(true)}
        className="scale mb-[60px] md:block hidden"
      >
        KHÁM PHÁ NGAY BÂY GIỜ
      </Button>
    </section>
  );
};

export default Hero;
