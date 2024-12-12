import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SwippingImages from "@/components/swippingImages";
import AboutUs from "@/components/sections/AboutUs";
import HowItHappensComponent from "@/components/howItHappensComponent";
import DarkModeComponent from "@/components/darkModeComponent";
import OnlyFreshBreadComponent from "@/components/onlyFreshBreadComponent";
import Products from "@/components/sections/Products";
import FeedbackComponent from "@/components/feedbackComponent";
export default function Home() {

  return (
    <div id="home" className={`dark:text-white scroll-smooth`}>

      <Header />

      <main>
        <DarkModeComponent />

        <SwippingImages />

        <AboutUs />

        <HowItHappensComponent />

        <OnlyFreshBreadComponent />

        <Products />

        <FeedbackComponent />
      </main>

      <Footer />
    </div>
  );

}
