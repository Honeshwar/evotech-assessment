import { JSX } from "react";
export default function AsideNav(): JSX.Element {
  return (
    <div className="w-1/5 h-full bg-[#1E1E2D]">
      <div className="w-full h-[78.22px] bg-[#1B1B28] relative font-poppins">
        <h1 className="W-[219px] h-[38px] text-[30px] font-bold text-white  tracking-normal absolute top-[15px] left-[30px]">
          DASHBOARD
        </h1>
        <div className="w-[28.91px] h-[28.88px]  ">
          <span className="text-[30px] font-bold  text-[#6993FF]">&lt;</span>
          <span className="text-[30px] font-bold opacity-30 text-[#6993FF]">
            &lt;
          </span>
        </div>
      </div>
    </div>
  );
}
