import Footer from "@/components/footer";
import Header from "@/components/header";
import SwippingImages from "@/components/swippingImages";
import AboutUs from "@/components/aboutUs";
import HowItHappensComponent from "@/components/howItHappensComponent";
import DarkModeComponent from "@/components/darkModeComponent";
import HowWeDoItComponent from "@/components/howWeDoItComponent";
import Products from "@/components/products";

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
    <div className={`w-full h-full dark:text-white scroll-smooth`}>

      <Header />

      <main>
        <DarkModeComponent />

        <SwippingImages />

        <AboutUs />

        <HowItHappensComponent />

        <HowWeDoItComponent />

        <Products />
      </main>

      <Footer />
    </div>
  );

}
