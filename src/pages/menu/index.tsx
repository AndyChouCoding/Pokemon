import pkImg from "../../img/home/pk.jpeg";
import pkGetImg from "../../img/home/pkGet.jpeg";
import getImg from "../../img/home/get.jpeg";
import { useNavigate } from "react-router";
import Layout from "../components/layout";

const Menu = () => {
  const go = useNavigate();
  return (
    <>
      <Layout>
        <div className="flex justify-center h-[70%] bg-red-300">
            pokemom center
        </div>
        <div className="flex justify-around h-[30%] bg-gray-100 p-5">
          <div
            className="flex justify-center items-center h-[100%]"
            onClick={() => {
              go("/pk");
            }}
          >
            <img className=" w-full h-full" src={pkImg}></img>
          </div>
          <div
            className="flex justify-center items-center h-[100%]"
            onClick={() => {
              go("/pkGet");
            }}
          >
            <img className=" w-full h-full" src={pkGetImg}></img>
          </div>
          <div
            className="flex justify-center items-center h-[100%]"
            onClick={() => {
              go("/get");
            }}
          >
            <img className=" w-full h-full" src={getImg}></img>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
