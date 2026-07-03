import React from "react";
import { RouterProvider, useRouter } from "./context/RouterContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import ServiceDetail from "./pages/ServiceDetail";

function AppContent() {
  const { currentPath } = useRouter();

  // Simple routing logic based on the pathname
  const renderView = () => {
    if (currentPath === "/" || currentPath === "/home") {
      return <Home />;
    }
    if (currentPath === "/about") {
      return <About />;
    }
    if (currentPath === "/services") {
      return <Services />;
    }
    if (currentPath.startsWith("/services/")) {
      const slug = currentPath.split("/services/")[1];
      return <ServiceDetail slug={slug} />;
    }
    if (currentPath === "/team") {
      return <Team />;
    }
    if (currentPath === "/blog") {
      return <Blog />;
    }
    if (currentPath === "/contact") {
      return <Contact />;
    }
    if (currentPath === "/quote") {
      return <Quote />;
    }

    // Default Fallback
    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky global navigation bar */}
      <Navbar />
      
      {/* Dynamic main page view based on path state */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Shared footer section */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
