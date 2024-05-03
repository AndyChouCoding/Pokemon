import { useNavigate } from "react-router";
import Layout from "../components/layout";

const Home = () => {
  const go = useNavigate();
  return (
    <>
        <Layout>
            Home
        </Layout>
    </>
  );
};
export default Home;
