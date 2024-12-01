import Footer from "@/components/footer";
import Header from "@/components/header";
import SwippingImages from "@/components/swippingImages";
import AboutUs from "@/components/aboutUs";
import HowItHappensComponent from "@/components/howItHappensComponent";
import DarkModeComponent from "@/components/darkModeComponent";
import HowWeDoItComponent from "@/components/howWeDoItComponent";

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
    <main className={`w-full h-full dark:text-white scroll-smooth`}>

      <Header />

      <DarkModeComponent />

      <SwippingImages />

      <AboutUs />

      <HowItHappensComponent />

      <HowWeDoItComponent />

      <Footer />
    </main>
  );

}
