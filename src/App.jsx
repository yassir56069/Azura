import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Ambition from "./components/Ambition";
import Channels from "./components/Channels";
import Distribution from "./components/Distribution";
import Process from "./components/Process";
import WhyAzura from "./components/WhyAzura";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-void min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Ambition />
        <Channels />
        <Distribution />
        <Process />
        <WhyAzura />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
