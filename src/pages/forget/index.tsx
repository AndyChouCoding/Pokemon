import { useNavigate } from "react-router";
import Layout from "../components/layout";

const Forget = () => {
  const go = useNavigate();
  const sendEmail = () => {
    console.log("send E-mail");
    go("/changePassword");
  };
  return (
    <>
      <Layout className="login_page_bg">
        <div className="flex justify-center ">
          <form className="w-[350px] p-6 mt-[25vh] rounded-md border-2 border-soild border-black bg-white opacity-80">
            <h2 className=" text-[24px]">Send reset email for your e-mail</h2>
            <div className="flex justify-between mt-8 w-[300px]">
              <label htmlFor="username" className="">
                UserName
              </label>
              <input
                id="username"
                className="border-2 border-solid border-black rounded-md"
                type="text"
              />
            </div>
            <div className="flex justify-between mt-2 w-[300px]">
              <label htmlFor="E-mail" className="">
                E-mail
              </label>
              <input
                id="E-mail"
                className="border-2 border-solid border-black rounded-md"
                type="text"
              />
            </div>
            <div className="flex justify-between w-[300px] m-2">
              <div></div>
              <button
                onClick={sendEmail}
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

export default Forget;
