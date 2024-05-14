import { useNavigate } from "react-router";
import Layout from "../components/layout";
import "../components/bg.css";

const Home = () => {
  const go = useNavigate();
  return (
    <>
      <Layout className="home_page_bg">
        <div className=" relative">
          <div onClick={()=>{go("/login")}} className="h-[60vh] md:h-[88vh]"></div>
          <p className=" absolute top-[60vh] p-2 text-center bg-slate-200 opacity-70 w-[100%]">
            請點擊任意處開始
          </p>
        </div>
      </Layout>
    </>
  );
};
export default Home;
