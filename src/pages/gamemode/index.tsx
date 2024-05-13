import Layout from "../components/layout";
import GetMode from "../../img/home/get.png"
import PKMode from "../../img/home/pk.png"
import PkGetMode from "../../img/home/pkGet.png"
import { useNavigate } from "react-router";

const GameMode = () => {
    const go = useNavigate();
  return (
    <>
      <Layout>
        <div className="flex justify-around mt-[38vh] text-center text-[3vh]">
          <div onClick={()=>{go('/getMode')}}>
            <div><img className="w-[25vh]" src={GetMode} alt="" /></div>
            <div>快速捕獲</div>
          </div>
          <div onClick={()=>{go('/pkMode')}}>
            <div><img className="w-[25vh]" src={PKMode} alt="" /></div>
            <div>活動對戰</div>
          </div>
          <div onClick={()=>{go('/pkgetMode')}}>
            <div><img className="w-[25vh]" src={PkGetMode} alt="" /></div>
            <div>對戰捕獲</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GameMode;
