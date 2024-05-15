import { useNavigate } from "react-router";
import Layout from "../../components/layout";



const GetModeResult = () =>{
    const go = useNavigate();
    const resultEnd = () => {go('/gameMode')};
    return<>
        <Layout>
            <div className="bg-slate-300" onClick={resultEnd}>
                <div className="  py-2 md:py-4 lg:py-6">
                <div className="flex justify-around text-center">
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                </div>
                </div>
                <div className=" bg-slate-300 py-2 md:py-4 lg:py-6">
                <div className="flex justify-around text-center">
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                </div>
                </div>
                <div className=" bg-slate-300 py-2 md:py-4 lg:py-6">
                <div className="flex justify-around text-center">
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[100px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[300px] bg-black rounded-md">pic</div>
                        <div className="bg-white p-1 rounded-2xl">
                            <div>level</div>
                            <div><p>name</p></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    </>
}
export default GetModeResult;