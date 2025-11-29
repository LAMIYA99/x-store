import FAQSection from "../Section/FAQSection";
import LuxurySection from "../Section/LuxurySection";
import PremiumSection from "../Section/PremiumSection";
import TestimonialSection from "../Section/TestimonialSection";

const HomeTemp = () => {
  return (
    <div>
      <PremiumSection />
      <LuxurySection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
};

export default HomeTemp;
