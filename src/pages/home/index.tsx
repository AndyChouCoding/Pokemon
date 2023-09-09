import { useNavigate } from "react-router";
import Layout from "../components/layout";

const Home = () => {
  const go = useNavigate();
  return (
    <>
        <Layout>
          <div className="w-full h-full" onClick={() => {go("/menu");}}>
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="flex justify-center mt-[60vh] text-[36px]">請點擊任意處開始遊戲</div>
          </div>
        </Layout>
    </>
  );
};
export default Home;
