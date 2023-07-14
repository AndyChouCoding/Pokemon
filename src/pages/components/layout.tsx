interface MainProps {
  children: React.ReactNode;
}

const Layout = ({ children }: MainProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export default Layout;

const Header = () => {
  return (
    <>
      <div className="">
        <div>Header</div>
        <div><Navbar /></div>
      </div>
      
    </>
  );
};
const Navbar = () => {
  return <>Navbar</>;
};
const Main = ({ children }: MainProps) => {
  return <>{children}</>;
};
const Footer = () => {
  return <>Footer</>;
};
