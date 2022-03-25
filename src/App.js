import Header from "./components/Header";
import Information from "./components/Information";
import Pricing from "./components/Pricing";
import Section from "./components/Section";
import Footer from "./components/tabs/Footer";


function App() {
  return (
    <div className='md:w-full'>
    <Header />
    <Section />
    <Pricing />
    <Information />
    <Footer />
    </div>
  );
}

export default App;
