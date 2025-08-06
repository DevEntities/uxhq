// src/components/RootLayout.jsx
import ScrollToTop from "./ScrollToTop.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}
