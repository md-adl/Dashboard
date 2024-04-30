import React from "react";
import AdminLayout from "./components/AdminLayout";
import { Toaster } from "sonner";
import "./assets/css/style.css";
import Dashboard from "./components/Dashboard";
import AppProvidersWrapper from "./components/AppProvidersWrapper";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <AppProvidersWrapper>
      <AdminLayout>
        <Dashboard  />
      </AdminLayout>

      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
}

export default App;
