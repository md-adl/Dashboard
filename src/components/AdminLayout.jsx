import { Suspense } from "react";
import { Topbar, Navbar } from "../components";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const AdminLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </Suspense>
  );
};

export default AdminLayout;
