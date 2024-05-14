import { Outlet, useNavigate } from "react-router";
import Layout from "../components/layout";
import Grass from "../../img/all/grass.png"


const GetMode = () => {
    const go = useNavigate()
    return<>
        <Layout className="get_Mode_Bg">
            <div className="flex justify-center text-center">
                <div className=" w-[350px] mt-[20vh]">
                    <div className=" ">
                        <div className=" flex justify-center items-center mb-10">
                            <div className="w-[70px] h-[10px] bg-white rounded-full"></div>
                            <div className=" w-[100px] h-[100px] mx-2 bg-pink-400 rounded-full flex justify-center items-center">
                                <div className="w-[90px] h-[90px] bg-white rounded-full "></div>
                            </div>
                            <div className="w-[70px] h-[10px] bg-white rounded-full"></div>
                        </div>
                        <div className=" mx-auto mb-5 w-[300px] h-[300px] bg-white rounded-full"></div>
                        <div className="h-[30px] p-2 rounded-lg bg-slate-200 opacity-90"></div>
                    </div>
                    <img onClick={()=>{console.log('get pokemon')}} className="w-[100%] " src={Grass} alt="" />
                </div>
            </div>
        </Layout>
    </>
}

export default GetMode;