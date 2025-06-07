import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/AdminDashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import NearbyGarages from "./components/NearbyGarages";
import ServiceSection from "./components/ServiceSection";
import BlogList from "./components/BlogList";
import BlogDetail from './pages/postDetailPage';
import TestimonialList from "./components/postReview";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/FAQ";
import ContactPage from "../src/pages/ContactSection";
import AboutUs from "../src/pages/AboutUs";
import GaragesPage from "../src/pages/GaragesPage";
import GaragesCard from "../src/components/GarageCard";
import GarageDetail from "../src/components/GarageDetail";
import BlogPage from "../src/pages/BlogPage";
import SearchResults from "../src/components/SearchResults";
import LoginForm from "./components/UserLogin";
import { AuthProvider } from './context/AuthContext';
import GarageForm from "../src/components/Garage";
import GarageList from "./components/GarageList";
import Ad from "./components/Ad";
import Sidebar from "./components/Sidebar";
import ServicesPage from './pages/ServicesPage';
import RightSidebar from './pages/RightSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from "./pages/Login";
import './App.css';
import HeaderNew from "./pages/HeaderNew";
import FeedCard from "../src/components/FeedCard";



const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app-layout">
          <Header />
          <div className="content-container">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <ServicesPage />
                      {/* <FeedCard/> */}
                      {/* <HeroSection />
                      <Slider />
                      <Ad />
                      <ServiceSection />
                      <BlogList />
                      <TestimonialList />
                      <GaragesCard /> */}
                    </>
                  }
                />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/UserLogin" element={<LoginForm />} />
                <Route path="/GarageRegistration" element={<GarageForm />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/garageRegistration" element={<GarageForm />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/admin/garages" element={<GaragesPage />} />
                <Route path="/garages/:id" element={<GarageDetail />} />
                <Route path="/admin/blogs" element={<BlogPage />} />
                <Route path="/garageList" element={<GarageList />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
              </Routes>
            </main>
            <RightSidebar />
          </div>
          {/* <Footer /> */}
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;