
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";


export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}

      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};