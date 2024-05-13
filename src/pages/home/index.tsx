import { useNavigate } from "react-router";
import Layout from "../components/layout";
import "../components/bg.css";

const Home = () => {
  const go = useNavigate();
  return (
    <>
      <Layout className="home_page_bg">
        <div>
          <div
            className="flex justify-center items-center h-[85vh] relative"
            onClick={() => {
              go("/gameMode");
            }}
          >
            <p className="p-4 bg-slate-300 text-3xl text-[black] rounded-md absolute bottom-20 w-[100%] text-center opacity-60">
              請點擊任意鍵開始
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
