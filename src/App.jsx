import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Programs from "./components/Programs"
import AboutUs from "./components/AboutUs"
import Comparison from "./components/Comparison"
import ChoosePlan from "./components/ChoosePlan"
import ParentTeacherCard from "./components/ParentTeacherCard"
import Reviews from "./components/Reviews"
import FAQ from "./components/FAQ"
import PromptCard from "./components/PromptCard"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <div>
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Navbar />
      <HeroSection />
      <Programs />
      <AboutUs />
      <Comparison />
      <ChoosePlan />
      <ParentTeacherCard />
      <Reviews />
      <FAQ />
      <PromptCard />
      <Footer />
    </div>
  )
}

export default App
