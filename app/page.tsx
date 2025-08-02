
import Navbar from "./components/navbar";
import Hero from "./components/heroSection";
import About from "./components/aboutSection";
import TechStack from "./components/stackSection";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

export default function Home() {
  return (
    < >
    <Navbar/>

    <main className="flex flex-col ">
      <Hero/>
      <About/>
      <TechStack/>
      <Contacts/>
    </main>
    <Footer/>
  
    </>
  );
}
