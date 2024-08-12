import Image from "next/image";
import Link from "next/link";
import { FaRegMap } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { LuPhoneCall } from "react-icons/lu";
import { GrFormNextLink } from "react-icons/gr";

const HeroInfo = () => {
  return (
    <div className="w-full h-svh flex justify-between items-center flex-col py-5">
      <header className="w-full h-16 flex justify-between items-center">
        <Link href="/" className="h-full w-auto">
          <Image
            src="/logo.jpg"
            alt="Hegazy logo"
            width={200}
            height={50}
            className="w-full h-full object-contain"
          />
        </Link>
        <div className="h-full flex justify-center items-center gap-3">
          <button className="bg-blue-100 p-2 rounded-md text-lg">
            <FaRegMap />
          </button>
          <button className="bg-blue-100 p-2 rounded-md text-lg">
            <CgMenuLeft />
          </button>
        </div>
      </header>
      <div className="w-full h-full flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl font-bold text-center">ابنى منزل أحلامك </h1>
        <h2 className="text-4xl font-bold text-center">
          العقارات في مصر: مناسبة للمعيشة والاستثمار
        </h2>
      </div>
      <div className="w-full flex justify-between items-center">
        <Link
          href="#"
          className="text-md h-10 font-bold bg-black text-white py-2 ps-1 pe-5 rounded-full flex justify-center items-center gap-2"
        >
          <p className="bg-blue-100 text-black h-8 w-8 rounded-full flex justify-center items-center">
            <LuPhoneCall />
          </p>
          <p>تواصل معنا</p>
        </Link>
        <Link
          href="#"
          className="text-sm font-bold flex justify-center items-center gap-2"
        >
          <figure className="w-14 h-14 rounded-full relative">
            <Image
              src="/properties/explore-all-properties.jpg"
              alt="explore all properties icon"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-full"
            />
            <GrFormNextLink className="absolute -top-2 -right-2 -rotate-45 text-2xl bg-blue-100 rounded-full" />
          </figure>
          <p className="max-w-24">اكتشف جميع العقارات</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroInfo;
