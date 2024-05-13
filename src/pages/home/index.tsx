import { useNavigate } from "react-router";
import Layout from "../components/layout";

const Home = () => {
  const go = useNavigate();
  return (
    <>
        <Layout>
            <div className="flex justify-center items-center h-[85vh]" onClick={()=>{go('/gameMode')}}>
              <p className=" text-3xl">請點擊任意鍵開始</p>
            </div>
        </Layout>
    </>
  );
};
export default Home;
