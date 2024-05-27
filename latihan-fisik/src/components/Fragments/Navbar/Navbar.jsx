const Navbar = () => {
  return (
    <nav className="px-[45px] w-full h-20 flex items-center text-black justify-between bg-[#FFF0DA] fixed top-0 z-50">
      <img
        src="/images/logo-aturpola.png"
        alt=""
        className="w-fit h-[66px] scale-75 object-cover object-center"
      />
      <div className="font-sans flex items-center gap-10">
        <a className="text-[#2C7865] font-medium hover:text-[#BA6F00] cursor-pointer">
          Makanan Sehat
        </a>
        <a className="text-[#2C7865] font-medium hover:text-[#BA6F00] cursor-pointer">
          Latihan Fisik
        </a>
        <a className="text-[#2C7865] font-medium hover:text-[#BA6F00] cursor-pointer">
          Komunitas
        </a>
      </div>
      <div>
        <img src="/images/profile.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;