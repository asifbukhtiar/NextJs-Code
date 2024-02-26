import Header from "@/app/components/header/header";
import Banner from "@/app/components/banner/banner";
import About from "@/app/components/about/about";
import Faq from "@/app/components/faq/faq";
import Contact from "@/app/components/contact/contact";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
      <>
          <Header/>
          <Banner/>
          <About/>
          <Contact/>
          <Faq/>
          <Footer/>
      </>
  );
}
