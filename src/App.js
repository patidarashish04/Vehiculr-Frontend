import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/AdminDashboard";
import DesktopOnboarding from "./components/DesktopOnboarding";
import AboutYouFilled from "./components/AboutYouFilled";
import UserLoginSuccessful from "./components/UserLoginSuccessful";
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
import DomainSelection from "./components/patnerOnboarding/DomainSelection";
import VehicleTypeSelection from "./components/patnerOnboarding/partnerCarBike";
import SignInMethodPage from './components/UserOnboarding/SignInMethodPage';
import EnterOtpScreen from "./components/UserOnboarding/EnterOtpScreen";
import CreatePassword from "./components/UserOnboarding/CreatePassword";
import TellAboutYou from "./components/UserOnboarding/TellAboutYou";
import SelectTopicsYouLove from "./components/UserOnboarding/SelectTopicsYouLove";
import CreateAPost from "./components/UserOnboarding/CreateAPost";
import PhoneNumberSignIn from "./components/UserOnboarding/PhoneNumberSignIn";
import VerifyNumberOtp from "./components/UserOnboarding/VerifyNumberOtp";
import PartnerDetails from "./components/patnerOnboarding/partnerDetails";
import VerifyPartnerNumber from "./components/patnerOnboarding/verifyPartnerNumber";
import PartnerKYCVerification from "./components/patnerOnboarding/partnerKYCVerification";
import PartnerKYCDetails from "./components/patnerOnboarding/partnerKYCDetails";
import OTPAfterKYC from "./components/patnerOnboarding/OTPAfterKYC";





const App = () => {
  const noLayoutRoutes = ["/signinmethod","/enterotp","/CreatePassword","/TellAboutYou","/SelectTopicsYouLove","/CreateAPost","/phoneNumberSignin","/VerifyNumberOtp"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);
  return (
    <Router>
      <AuthProvider>
      {hideLayout ? (
          // Only render the desired route without layout
          <Routes>
          
            <Route path="/signinmethod" element={<SignInMethodPage />} /> 
            <Route path="/enterotp" element={<EnterOtpScreen />} />
            <Route path="/CreatePassword" element={<CreatePassword />} />
            <Route path="/TellAboutYou" element={<TellAboutYou />} />
            <Route path="/SelectTopicsYouLove" element={<SelectTopicsYouLove />} />
            <Route path="/CreateAPost" element={<CreateAPost />} />
            <Route path="/sign-in" element={<SignInMethodPage />} />
            <Route path="/signinmethod" element={<SignInMethodPage />} />
             <Route path="/phoneNumberSignin" element={<PhoneNumberSignIn />} />
             <Route path="/VerifyNumberOtp" element={<VerifyNumberOtp/>}/>
          </Routes>
        ) : (
          // Full layout with sidebar, header

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
                <Route path="/onboarding" element={<DesktopOnboarding />} />
                <Route path="/aboutYouFilled" element={<AboutYouFilled />} />
                <Route path="/userLoginSuccessful" element={<UserLoginSuccessful />} />
                <Route path="/DomainSelection" element={<DomainSelection />} />
                <Route path="/VehicleTypeSelection" element={<VehicleTypeSelection />} />
                <Route path="/PartnerDetails" element={<PartnerDetails />} />
                <Route path="/VerifyPartnerNumber" element={<VerifyPartnerNumber/>} />
               <Route path="/PartnerKYCVerification" element={<PartnerKYCVerification/>} />
               <Route path="/PartnerKYCDetails" element={<PartnerKYCDetails/>} />
               <Route path="/OTPAfterKYC" element={<OTPAfterKYC/>} />

              </Routes>
            </main>
            <RightSidebar />
          </div>
          {/* <Footer /> */}
        </div>
        )}
      </AuthProvider>
    </Router>
  );
};

export default App;