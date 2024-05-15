import { useNavigate } from "react-router";
import Layout from "../../components/layout";



const FightingChoose = () => {
    const go = useNavigate();
    const goFighting = () =>{go("/pkgetMode/fighting")}
    return<>
        <Layout>
            <div>
                <div className="flex justify-around mt-[200px] mb-[100px]">
                    <div onClick={goFighting} className="">
                        <div className=" w-[100px] h-[100px] bg-yellow-300 rounded-full"></div>
                        <div className=" bg-slate-300 w-[100px] text-center mt-2 p-2 rounded-full">name</div>
                    </div>
                    <div onClick={goFighting}  className="">
                        <div className=" w-[100px] h-[100px] bg-yellow-300 rounded-full"></div>
                        <div className=" bg-slate-300 w-[100px] text-center mt-2 p-2 rounded-full">name</div>
                    </div>
                    <div onClick={goFighting}  className="">
                        <div className=" w-[100px] h-[100px] bg-yellow-300 rounded-full"></div>
                        <div className=" bg-slate-300 w-[100px] text-center mt-2 p-2 rounded-full">name</div>
                    </div>
                </div>
                <div className="text-center bg-slate-200 p-4 border-4 border-solid border-black rounded-full"><p>請選擇要變成夥伴的寶可夢</p></div>
            </div>
        </Layout>
    </>
}
export default FightingChoose;