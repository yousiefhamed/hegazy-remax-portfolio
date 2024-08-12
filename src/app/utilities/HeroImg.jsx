import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GoDownload } from "react-icons/go";

const HeroImg = () => {
  return (
    <div
      style={{
        background: "url('/properties/egypt-hero.webp') no-repeat center",
        backgroundSize: "cover",
      }}
      className="w-full h-svh flex justify-between items-center flex-col p-5 rounded-3xl text-white font-bold"
    >
      <header className="w-full flex md:flex-row flex-col justify-between items-center gap-3">
        <p className="md:max-w-40">اكثر من 1500 عقار علي مستوي الجمهورية </p>
        <p className="md:max-w-40">اسعار تناسب مبزانيتك في افصل الاماكن</p>
        <div className="h-full flex justify-center items-center gap-2">
          <button className="border-white border-2 p-2 rounded-md text-lg">
            <FaRegHeart />
          </button>
          <button className="bg-white border-white text-black border-2 p-2 rounded-md text-lg">
            <MdOutlineMapsHomeWork />
          </button>
        </div>
      </header>
      <div className="w-full">
        <Link
          href="#"
          className="w-fit px-5 py-3 rounded-2xl bg-white text-black flex justify-center items-center gap-3 hover:scale-110 transition-all"
        >
          <GoDownload className="text-2xl" />
          <p className="max-w-20"> احصل على الكتالوج</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
