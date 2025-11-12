import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./layouts/Footer";
import PageWrapper from "./utils/PageWrapper"
import Loader from "./utils/Loader";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const PneumaticPage = React.lazy(() => import("./pages/PneumaticPage"));
const Transair = React.lazy(() => import("./pages/TransairPage"));
const ManufacturingPage = React.lazy(() => import("./pages/ManufacturingPage"));
const EventPage = React.lazy(() => import("./pages/EventPage"));
const IndustriesPage = React.lazy(() => import("./pages/IndustriesPage"));
const CompressedPage = React.lazy(() => import("./pages/CompressedPage"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
const HydraulicsPage = React.lazy(() => import("./pages/HydraulicsPage"));
const ParkerProductPage = React.lazy(() => import("./pages/ParkerProductPage"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const Project = React.lazy(() => import("./pages/ProjectPage"));
const MyProfile = React.lazy(() => import("./pages/MyProfile"));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
          <Route path="/pneumatics" element={<PageWrapper><PneumaticPage /></PageWrapper>} />
          <Route path="/transair" element={<PageWrapper><Transair /></PageWrapper>} />
          <Route path="/manufacturing" element={<PageWrapper><ManufacturingPage /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><EventPage /></PageWrapper>} />
          <Route path="/industries" element={<PageWrapper><IndustriesPage /></PageWrapper>} />
          <Route path="/compressed-air-and-gas-treatment" element={<PageWrapper><CompressedPage /></PageWrapper>} />
          <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/products" element={<PageWrapper><ProductPage /></PageWrapper>} />
          <Route path="/low-pressure-product" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
          <Route path="/hydraulics" element={<PageWrapper><HydraulicsPage /></PageWrapper>} />
          <Route path="/parker-product" element={<PageWrapper><ParkerProductPage /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Project /></PageWrapper>} />
          <Route path="/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
          <Route path="/my-profile" element={<PageWrapper><MyProfile /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function AppContent() {
  useEffect(() => {
    // Check if visitorId exists
    let visitorId = localStorage.getItem("laminar_visitor_id");

    if (!visitorId) {
      // Generate new visitor ID
      visitorId = `v_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
      localStorage.setItem("laminar_visitor_id", visitorId);

      // Only send the request on FIRST visit (new visitor)
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/visitors/track-visit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ visitorId }),
      }).catch(console.error);
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <div>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader /></div>}>
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;