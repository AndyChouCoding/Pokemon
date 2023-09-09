import { useNavigate } from "react-router";
import Btn from "../components/btn";
import Layout from "../components/layout";



const Pk = () => {
    const go = useNavigate();
    return<>
    <Layout>
    <div>請選擇要對戰的對手</div>
            <div>
                <div onClick={()=>{go("/fighting")}}>對手一</div>
                <div>對手二</div>
            </div>
    </Layout>

    </>
}
export default Pk;