import React, { useState } from "react";
import "../components/bg.css";

interface FightBtnProps {
    count:number;
    setCount:React.Dispatch<React.SetStateAction<number>>;
}

const FightBtn:React.FC<FightBtnProps> = ({ count, setCount}) => {
    return<>
        <div className="flex justify-around items-center text-center bg-slate-200 p-2 opacity-80 absolute top-[188px] w-[100%] ">
            <button onClick={()=> setCount(count + 3)} className="w-[50px] h-[50px] rounded-full border-4 border-solid border-white bg-blue-400">Left</button>
            <div className="flex p-2 text-black absolute "><span className="mx-2 ">{count}</span><p>%</p></div>
            <button onClick={()=> setCount(count + 3)} className="w-[50px] h-[50px] rounded-full border-4 border-solid border-white bg-orange-400">Right</button>
        </div>
    </>
}

const FightLayout = () => {
    const [count, setCount] = useState(0);
  return (
    <>
      <div className="">
        <div className="h-[43vh] fightting_bg_they"></div>
        <div className="border-y-2 border-black bg-yellow-300 h-[20px] flex items-center text-center relative">
            <div className="w-[30px] h-[30px] mx-[1px] border-2 border-red-500 bg-white rounded-full absolute bottom-2 z-[99]">1</div>
            <div className="w-[30px] h-[30px] mx-[1px] border-2 border-red-500 bg-white rounded-full absolute bottom-2 left-6 z-[99]">2</div>
            <div className="w-[30px] h-[30px] mx-[1px] border-2 border-blue-500 bg-white rounded-full absolute top-2 z-[99]">3</div>
            <div className="w-[30px] h-[30px] mx-[1px] border-2 border-blue-500 bg-white rounded-full absolute top-2 left-6 z-[99]">4</div>
        </div>
        <div className="h-[254px] fightting_bg_my relative">
            <div></div>
            <FightBtn count={count} setCount={setCount}/>
        </div>
      </div>
    </>
  );
};
export default FightLayout;
