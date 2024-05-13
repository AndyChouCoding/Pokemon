import Layout from "../components/layout";
import SamplePic from "../../../src/img/pokemon/0UM75x1Lj4OF7m6JA2T3IqRfOk7JCCWYYGOrBPws.jpg";

const ChoosePokemon = () => {
  let samplePicUrl =
    require("../../../src/img/pokemon/0UM75x1Lj4OF7m6JA2T3IqRfOk7JCCWYYGOrBPws.jpg").default;

  return (
    <>
      <div className="flex justify-around ">
        <div className="w-[150px] h-[150px] overflow-hidden items-center m-2 border-2 border-solid border-black rounded-xl">
          <img className=" w-[100%] " src={SamplePic} alt="" />
        </div>
        <div className="w-[150px] h-[150px] overflow-hidden items-center m-2 border-2 border-solid border-black rounded-xl">
          <img className=" w-[100%] " src={SamplePic} alt="" />
        </div>
        <div className="w-[150px] h-[150px] overflow-hidden items-center m-2 border-2 border-solid border-black rounded-xl">
          <img className=" w-[100%] " src={SamplePic} alt="" />
        </div>
        <div className="w-[150px] h-[150px] overflow-hidden items-center m-2 border-2 border-solid border-black rounded-xl">
          <img className=" w-[100%] " src={SamplePic} alt="" />
        </div>
        
      </div>
    </>
  );
};

const PkGetMode = () => {
  return (
    <>
      <Layout>
        <div className="">
          <div className="mt-[20vh]">
            <ChoosePokemon />
          </div>
          <div className="p-2 m-2 bg-gray-200 rounded-3xl text-center mt-[20vh]">
            <p className="p-2 m-2 text-white rounded-full font-bold bg-indigo-300">或許可以遇到這些寶可夢？</p>
            <div className="flex justify-around">
              <div className="w-[100px] h-[100px] rounded-full items-center border-2 border-solid border-black overflow-visible">
                {/* <img className=" w-[100%] h-[100%] rounded-full items-center border-2 border-solid" src={SamplePic} alt="" /> */}
              </div>
              <div className="w-[100px] h-[100px] rounded-full items-center border-2 border-solid border-black ">
                {/* <img className=" w-[100%] h-[100%]" src={SamplePic} alt="" /> */}
              </div>
              <div className="w-[100px] h-[100px] rounded-full items-center border-2 border-solid border-black ">
                {/* <img className=" w-[100%] h-[100%]" src={SamplePic} alt="" /> */}
              </div>
              <div className="w-[100px] h-[100px] rounded-full items-center border-2 border-solid border-black ">
                {/* <img className=" w-[100%] h-[100%]" src={SamplePic} alt="" /> */}
              </div>
              <div className="w-[100px] h-[100px] rounded-full items-center border-2 border-solid border-black ">
                {/* <img className=" w-[100%] h-[100%]" src={SamplePic} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PkGetMode;
