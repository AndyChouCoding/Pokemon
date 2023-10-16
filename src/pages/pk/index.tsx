import { useNavigate } from "react-router";
import Btn from "../components/btn";
import Layout from "../components/layout";
import OpponentChoose from "../components/opponentChoose";

const Pk = () => {
  const go = useNavigate();
  return (
    <>
      <Layout>
        <div className="mt-[20%] mb-[20%] flex justify-center">
          請選擇要對戰的對手
        </div>
        <OpponentChoose/>
      </Layout>
    </>
  );
};
export default Pk;
