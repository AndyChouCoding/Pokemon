import { useNavigate } from "react-router";
import Logo from "../../img/all/Gaole.png"


interface MainProps {
  children: React.ReactNode;
}

const Layout = ({ children }: MainProps) => {
  const go = useNavigate()
  return (
    <>
        <div className=" border-4 rounded-md bg-white border-black absolute top-[10%] left-[10%] w-[80%] h-[80%]">{children}</div>
        <div>
          <div className="border-[1px] h-[47vh] border-black bg-red-600"><img src={Logo} className="w-[20%]" alt="" onClick={()=>{go("/")}} /></div>
          <div className="border-[1px] h-[6vh] border-black bg-black"></div>
          <div className="border-[1px] h-[47vh] border-black"></div>
        </div>
    </>
  );
};
export default Layout;
