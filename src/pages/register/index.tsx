import { useNavigate } from "react-router";
import Layout from "../components/layout";


const Register = () => {
    const go = useNavigate();
    const RegisterSubmit = () =>{
        console.log('go login')
        go('/login')
    }
    return<>
<Layout className="login_page_bg">
        <div className="flex justify-center ">
          <form className="w-[400px] p-6 mt-[25vh] rounded-md border-2 border-soild border-black bg-white opacity-80">
            <h2 className=" text-[30px]">Hello,Pokemon Tainner</h2>
            <h2 className=" text-[30px]">welcome to Gaole!</h2>
            <div className="flex justify-between mt-10 w-[300px]">
                <label htmlFor="username" className="">UserName</label>
                <input id="username" className="border-2 border-solid border-black rounded-md" type="text" />
            </div>
            <div className="flex justify-between mt-2 w-[300px]">
                <label htmlFor="password" className="">Password</label>
                <input id="password" className="border-2 border-solid border-black rounded-md" type="password" />
            </div>
            <div className="flex justify-between mt-2 w-[300px]">
                <label htmlFor="email" className="">E-Mail</label>
                <input id="email" className="border-2 border-solid border-black rounded-md" type="password" />
            </div>
            <div className="flex justify-between w-[300px] m-2">
                <div></div>
                <button onClick={RegisterSubmit} className="p-2 m-2 border-2 border-solid border-black rounded-md">Send</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
}

export default Register;