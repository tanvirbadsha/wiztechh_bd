import Footer from "./components/footer/Footer";
import EssetialToolsContainer from "./components/layouts/EssetialToolsContainer";
import Page from "./components/layouts/Page";
import ShowCustomerReview from "./components/layouts/ShowCustomerReview";
import CourseShowcase from "./components/main_layout/course_showcase/CourseShowcase";
import MarketingHero from "./components/main_layout/MarketingHero";

function App() {
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

export default App;
