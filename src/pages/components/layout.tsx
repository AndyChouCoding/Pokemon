import { useNavigate } from "react-router";
import Logo from "../../img/all/Gaole.png";


interface MainProps {
  children: React.ReactNode;
}


const ControlBtns = () => {
  const go = useNavigate();
  return<>
    <div className="flex justify-around text-xs">
      <button className="mx-1 p-1 text-gray-500" onClick={()=>{go('/login')}}>Login</button>
      <button className="mx-1 p-1 text-gray-500" onClick={()=>{go('/register')}}>Register</button>
      <button className="mx-1 p-1 text-gray-500" onClick={()=>{go('/forget')}}>Forget</button>
    </div>
  </>
}

const Layout = ({ children }: MainProps) => {
  const go = useNavigate();
  return (
    <>
      <div className="">
        <div className="bg-red-500 h-[50vh]">
          <div className="w-[13vh]" onClick={()=>{go('/')}}>
          <img src={Logo} className="" alt="" />
          </div>
        </div>
        <div className="bg-black h-[3vh] relative"></div>
        <div className="border-4 border-solid border-black bg-white rounded-md w-[90%] h-[90%] absolute top-[5%] left-[5%] ">
          <div className="">
            <div className="flex justify-between">
              <div></div>
              <div><ControlBtns/></div>
            </div>
            <div>{children}</div>
          </div>
        </div>
        <div className="bg-white h-[50vh]"></div>
      </div>
    </>
  );
};
export default Layout;
