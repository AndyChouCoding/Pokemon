import { useNavigate } from "react-router";
import Layout from "../components/layout";

const LoginPage = () => {
    const go = useNavigate();
    const LoginSubmit = () =>{
        console.log('login acceess')
        go('/gameMode')
    }
  return (
    <>
      <Layout className="login_page_bg">
        <div className="flex justify-center ">
          <form className="w-[400px] p-6 mt-[25vh] rounded-md border-2 border-soild border-black bg-white opacity-80">
            <h2 className=" text-[30px]">Hello,Pokemon Tainner</h2>
            <h2 className=" text-[30px]">welcome back Gaole!</h2>
            <div className="flex justify-between mt-10 w-[300px]">
                <label htmlFor="username" className="">UserName</label>
                <input id="username" className="border-2 border-solid border-black rounded-md" type="text" />
            </div>
            <div className="flex justify-between mt-2 w-[300px]">
                <label htmlFor="password" className="">Password</label>
                <input id="password" className="border-2 border-solid border-black rounded-md" type="password" />
            </div>
            <div className="flex justify-center mt-2">
                <button onClick={LoginSubmit} className="p-2 m-2 border-2 border-solid border-black rounded-md">Login</button>
                <button onClick={()=>{go('/register')}} className="p-2 m-2 border-2 border-solid border-black rounded-md">Register</button>
                <button onClick={()=>{go('/forget')}} className="p-2 m-2 border-2 border-solid border-black rounded-md">Forget</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
