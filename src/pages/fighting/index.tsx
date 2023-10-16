import Btn from "../components/btn";
import Layout from "../components/layout";

const Fighting = () => {
  return (
    <>
        <Layout>
            <div className="flex justify-center items-center border-4 border-black h-[40%]">敵方的畫面</div>
            <div className="flex justify-center items-center border-4 border-black h-[40%]">我方的畫面</div>
            <div className="h-[20%]"><Btn/></div>
        </Layout>
    </>
  );
};
export default Fighting;
