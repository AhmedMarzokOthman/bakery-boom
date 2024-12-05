import Footer from "@/components/footer";
import Header from "@/components/header";
import SwippingImages from "@/components/swippingImages";
import AboutUs from "@/components/aboutUs";
import HowItHappensComponent from "@/components/howItHappensComponent";
import DarkModeComponent from "@/components/darkModeComponent";
import OnlyFreshBreadComponent from "@/components/onlyFreshBreadComponent";
import Products from "@/components/products";
import FeedbackComponent from "@/components/feedbackComponent";
export default function Home() {

  const links = [{
    href: "#product",
    text: "Product"
  }, {
    href: "#home",
    text: "About"
  }, {
    href: "#contact",
    text: "Contact Us"
  },
  ]



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
