import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import EssetialToolsContainer from "./components/layouts/EssetialToolsContainer";
import Page from "./components/layouts/Page";
import ShowCustomerReview from "./components/layouts/ShowCustomerReview";
import CourseShowcase from "./components/main_layout/course_showcase/CourseShowcase";
import MarketingHero from "./components/main_layout/MarketingHero";
import Login from "./components/Login";

function Home() {
  return (
    <>
      <Page />
      <MarketingHero />
      <CourseShowcase />
      <ShowCustomerReview />
      <EssetialToolsContainer />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
