import Navbar from '../../Fragments/Navbar/Navbar';
import BodyContentSection from '../../layouts/DetailLatihanFisik/BodyContentSection';
import EndContentSection from '../../layouts/DetailLatihanFisik/EndContentSection';
import HeaderContentSection from '../../layouts/DetailLatihanFisik/HeaderContentSection';
import MainContentSection from '../../layouts/DetailLatihanFisik/MainContentSection';

const DetailLatihanFisik = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-[60px] w-full items-center mb-[100px]">
        <HeaderContentSection />
        <BodyContentSection />
        <MainContentSection />
        <EndContentSection />
      </main>
    </>
  );
};

export default DetailLatihanFisik;
