import { useNavigate } from "react-router";
import Layout from "../components/layout";

const LoginPage = () => {
    const go = useNavigate();
  return (
    <>
      <Layout>
        <div className="flex justify-center ">
          <form className="w-[400px] p-6 mt-[20vh] rounded-md border-2 border-soild border-black ">
            <h2 className=" text-[30px]">Hello,Pokemonm Tainner</h2>
            <h2 className=" text-[30px]">welcome back Gaole!</h2>
            <div className="flex justify-between mt-10 w-[300px]">
                <p className="">UserName</p>
                <input className="border-2 border-solid border-black rounded-md" type="text" />
            </div>
            <div className="flex justify-between mt-2 w-[300px]">
                <p className="">Password</p>
                <input className="border-2 border-solid border-black rounded-md" type="text" />
            </div>
            <div className="flex justify-center mt-2">
                <button onClick={()=>{go('/gameMode')}} className="p-2 m-2 border-2 border-solid border-black rounded-md">Login</button>
                <button onClick={()=>{go('/forget')}} className="p-2 m-2 border-2 border-solid border-black rounded-md">Forget</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
