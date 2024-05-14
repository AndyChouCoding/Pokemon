import Layout from "../components/layout";
import GetMode from "../../img/home/get.png"
import PKMode from "../../img/home/pk.png"
import PkGetMode from "../../img/home/pkGet.png"
import { useNavigate } from "react-router";

const GameMode = () => {
    const go = useNavigate();
  return (
    <>
      <Layout  className="mode_page_bg">
        <div className=" relative">
          <div className="flex justify-around h-[100%] text-center text-[black] text-[2vh] absolute top-[40vh] left-[10%] right-[10%]">
            <div onClick={()=>{go('/getMode')}}>
              <div><img className="w-[25vh]" src={GetMode} alt="" /></div>
              <div className=" bg-gray-300 rounded-xl opacity-60">快速捕獲</div>
            </div>
            <div onClick={()=>{go('/pkMode')}}>
              <div><img className="w-[25vh]" src={PKMode} alt="" /></div>
              <div className=" bg-gray-300 rounded-xl opacity-60">活動對戰</div>
            </div>
            <div onClick={()=>{go('/pkgetMode')}}>
              <div><img className="w-[25vh]" src={PkGetMode} alt="" /></div>
              <div className=" bg-gray-300 rounded-xl opacity-60">對戰捕獲</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GameMode;
