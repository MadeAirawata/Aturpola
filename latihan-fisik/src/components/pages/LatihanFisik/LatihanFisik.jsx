import Navbar from '../../Fragments/Navbar/Navbar';
import FindGymSection from '../../layouts/LatihanFisik/FindGymSection/FindGymSection';
import HeroSection from '../../layouts/LatihanFisik/HeroSection/HeroSection';
import HowImportantSection from '../../layouts/LatihanFisik/HowImportantSection/HowImportantSection';
import PhysicalTrainingGoalsSection from '../../layouts/LatihanFisik/PhysicalTrainingGoalsSection/PhysicalTrainingGoalsSection';
import RecommendationGymSection from '../../layouts/LatihanFisik/RecommendationGymSection/RecommendationGymSection';
import RecommendationPhysicalSection from '../../layouts/LatihanFisik/RecommendationPhysicalSection/RecommendationPhysicalSection';

const LatihanFisik = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-[60px] w-full items-center mb-[100px]">
        <HeroSection />
        <HowImportantSection />
        <PhysicalTrainingGoalsSection />
        <RecommendationPhysicalSection />
        <FindGymSection />
        <RecommendationGymSection />
      </main>
    </>
  );
};

export default LatihanFisik;
