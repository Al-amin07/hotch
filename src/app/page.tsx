import Banner from "@/components/Banner";
import FooterBanner from "@/components/FooterBanner";
import PricingSection from "@/components/PricingSection";
import TabInterface from "@/components/TabInterface";
import Testimonials from "@/components/Testimonial";
import TrustedCustomer from "@/components/TrustedCustomer";
import WritingTools from "@/components/WritingTools";


export default function Home() {
  return (
    <div className=" mb-24 px-6 ">

      <Banner />
      <TrustedCustomer />
      <WritingTools />
      <TabInterface />
      <Testimonials />
      <PricingSection />
      <FooterBanner />
    </div>
  );
}
