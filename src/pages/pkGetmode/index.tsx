import Layout from "../components/layout";
import SamplePic from "../../../src/img/pokemon/0UM75x1Lj4OF7m6JA2T3IqRfOk7JCCWYYGOrBPws.jpg";
import { useNavigate } from "react-router";



const PkGetMode = () => {
  const go = useNavigate();
  const fighting = () =>{go('/pkgetMode/fightingChoose')}
  return (
    <>
      <Layout>
          <div className="">
            <div className="flex justify-center items-center my-[80px]">
              <div><button>〈</button></div>
              <div onClick={fighting} className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] rounded-md bg-slate-200 mx-8"></div>
              <div>〉</div>
            </div>
            <div>
              <div className="flex justify-center m-2"><p className=" bg-violet-400 w-[250px] text-center p-2 rounded-full">或許可以遇到這些寶可夢?!</p></div>
              <div className="w-[90%] h-[70px] mx-auto bg-slate-200 rounded-full flex justify-around items-center text-center ">
                <div className="w-[50px] h-[50px] rounded-full bg-white "></div>
                <div className="w-[50px] h-[50px] rounded-full bg-white "></div>
                <div className="w-[50px] h-[50px] rounded-full bg-white "></div>
                <div className="w-[50px] h-[50px] rounded-full bg-white "></div>
                <div className="w-[50px] h-[50px] rounded-full bg-white "></div>

              </div>
            </div>
          </div>
      </Layout>
    </>
  );
};

export default PkGetMode;
