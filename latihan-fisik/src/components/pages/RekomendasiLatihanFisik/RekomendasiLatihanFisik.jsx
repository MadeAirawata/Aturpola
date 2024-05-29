import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../layouts/LatihanFisik/HeroSection/HeroSection';
import IntroductionSection from '../../layouts/RekomendasiLatihanFisik/IntroductionSection/IntroductionSection';
import RekomendasiListSection from '../../layouts/RekomendasiLatihanFisik/IntroductionSection/RekomendasiListSection';

const RekomendasiLatihanFisik = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-[60px] w-full items-center mb-[100px]">
        <HeroSection />
        <IntroductionSection />
        <RekomendasiListSection />
      </main>
    </>
  );
};

export default RekomendasiLatihanFisik;
