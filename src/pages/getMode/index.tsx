import { Outlet, useNavigate } from "react-router";
import Layout from "../components/layout";



const GetMode = () => {
    const go = useNavigate()
    return<>
        <Layout>
            <div className=" flex justify-center mt-10 text-[40px]">
                <div>Glass</div>
            </div>
        </Layout>
    </>
}

export default GetMode;