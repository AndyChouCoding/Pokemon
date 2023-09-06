import { useNavigate } from "react-router";
import Layout from "../components/layout";
import pkImg from "../../img/home/pk.jpeg";
import pkGetImg from "../../img/home/pkGet.jpeg";
import getImg from "../../img/home/get.jpeg";



const Home = () => {
    const go = useNavigate();
    return<>
        <Layout>
            <div>Pokemon Gaole</div>
            <div className="flex justify-around p-10 bg-gray-100">
                <div className="flex justify-center items-center w-40 h-40" onClick={()=>{go("/pk")}}><img className=" w-full h-full" src={pkImg}></img></div>
                <div className="flex justify-center items-center w-40 h-40" onClick={()=>{go("/pkGet")}}><img className=" w-full h-full" src={pkGetImg}></img></div>
                <div className="flex justify-center items-center w-40 h-40" onClick={()=>{go("/get")}}><img className=" w-full h-full" src={getImg}></img></div>
            </div>
        </Layout>
    </>
}
export default Home;