import { Outlet, useNavigate } from "react-router";
import Layout from "../components/layout";
import Grass from "../../img/all/grass.png"


const GetMode = () => {
    const go = useNavigate()
    const getResult = () => {go('/getMode/GetModeResult')}
    return<>
        <Layout className="get_Mode_Bg">
            <div className="flex justify-center text-center  ">
                <div className=" w-[350px] mt-[3vh] sm:mt-[20vh] ">
                    <div className="">
                        <div className=" flex justify-center items-center mb-10">
                            <div className="w-[70px] h-[10px] bg-white rounded-full"></div>
                            <div className=" w-[100px] h-[100px] mx-2 bg-pink-400 rounded-full flex justify-center items-center">
                                <div className="w-[90px] h-[90px] bg-white rounded-full flex justify-center items-center text-[30px]">1</div>
                            </div>
                            <div className="w-[70px] h-[10px] bg-white rounded-full"></div>
                        </div>
                        <div className="">
                            <div className=" mx-auto mb-5 w-[300px] h-[300px] bg-white rounded-full flex justify-center items-center">
                                <div onClick={getResult} className=" bg-pink-300 w-[280px] h-[280px] rounded-full flex justify-center items-center text-[white]"></div>
                            </div>
                        </div>
                        <div className="h-[30px] p-2 rounded-lg bg-slate-200 opacity-90">Pokemon name</div>
                    </div>
                    <img onClick={()=>{console.log('get pokemon')}} className="w-[100%] " src={Grass} alt="" />
                </div>
            </div>
        </Layout>
    </>
}

export default GetMode;