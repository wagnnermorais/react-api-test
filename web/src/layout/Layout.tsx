import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-zinc-950">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
