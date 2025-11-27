import HeroSection  from './Herosection.jsx';
import Footer2 from './footer.jsx';
import {FAQ} from '@/components/Faq.jsx';
import FeaturesPage from  './Featurepage.jsx';
import { BackgroundBeams } from "@/components/ui/background-beams.jsx";





export default function LandingPage(){
  
    return (
      <div className="min-h-screen w-full bg-black relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
    }}
  />
  
    <section id="home">
            <HeroSection />
            </section>
            
            <div className="relative z-10">
            <section id="features">
  <FeaturesPage />
</section>
  </div>

  

 <BackgroundBeams />

<section id="faq">


            <FAQ 
                 colorScheme="green"
            faqs={[
    { question:"what is Carbon offset?",answer:"Carbon offset is an action that balances out the carbon dioxide you produce by reducing or removing the same amount of CO₂ elsewhere, such as planting trees or using renewable energy."},
    { question: "What is EcoStep?", answer: "EcoStep helps fund eco projects." },
    { question: "How can I connect my wallet?", answer: "Install any wallet extension and Use the Connect Wallet button. it will popup the extension for Authentication " },
    {question:"Is my personal data safe?",answer:"Absolutely yes,we use web3 technologies to ensure your data is secure."},
  ]}/>
  </section>
            <Footer2 />
 
        </div>
    );
};
