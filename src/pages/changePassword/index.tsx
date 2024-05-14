import { useNavigate } from "react-router";
import Layout from "../components/layout";

const ChangePassword = () => {
    const go = useNavigate();
    const sendNewPassword = () =>{
        console.log('change password , go login page');
        go('/login');
    }
  return (
    <>
      <Layout className="login_page_bg">
        <div className="flex justify-center ">
          <form className="w-[350px] p-6 mt-[25vh] rounded-md border-2 border-soild border-black bg-white opacity-80">
            <h2 className=" text-[24px]">New Password</h2>
            <div className="flex justify-between mt-8 w-[300px]">
              <label htmlFor="newpassword" className="">
              New Password
              </label>
              <input
                id="newpassword"
                className="border-2 border-solid border-black rounded-md"
                type="password"
              />
            </div>
            <div className="flex justify-between mt-2 w-[300px]">
              <label htmlFor="passwordConfirmation" className="">
              confirmation
              </label>
              <input
                id="passwordConfirmation"
                className="border-2 border-solid border-black rounded-md"
                type="password"
              />
            </div>

            <div className="flex justify-between w-[300px] m-2">
                <div></div>
              <button
                onClick={sendNewPassword}
                className="p-2 m-2 border-2 border-solid border-black rounded-md"
              >
                send
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ChangePassword;
