"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";

const HeroImg = () => {
  return (
    <div className="w-full h-svh py-5">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        style={{
          background:
            "url('/properties/contact-us-property.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
        className="w-full h-full flex justify-between items-center flex-col p-5 rounded-3xl text-white font-bold"
      >
        <div className="w-full flex justify-end items-center">
          <Link
            href="#"
            className="text-md h-10 font-bold bg-black text-white py-2 rounded-full inline-block hover:scale-110 transition-all"
          >
            <div className="w-full h-full flex justify-center items-center gap-2 ps-5 pe-1 transition-all">
              <p>تواصل معنا</p>
              <p className="bg-blue-100 text-black h-8 w-8 rounded-full flex justify-center items-center">
                <LuPhoneCall />
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full flex justify-start">
          <Link href="#">
            <p>ابنى منزل أحلامك</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImg;
