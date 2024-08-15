"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const PropertyTypes = () => {
  const types = [
    "apartment.jpg",
    "beachfront.webp",
    "commercial-spaces.jpg",
    "desert-retreats.jpg",
    "eco-friendly.png",
    "golf-course.jpg",
    "holiday-homes.jpg",
    "investment.webp",
    "penthouse.webp",
    "townhouse.jpg",
    "villas.jpg",
    "waterfront.jpg",
  ];
  return (
    <div className="w-full max-w-[1950px] mx-auto flex flex-col justify-center items-center gap-10 md:px-10 px-5 py-10">
      <h2 className="font-bold text-5xl max-w-96 text-center">
        اكتشف نوع العقار المثالى لك
      </h2>
      <div className="properties-type w-full justify-center items-center relative 2xl:columns-5 xl:columns-4 lg:columns-3 md:columns-2 columns-1">
        {types.map((x) => (
          <Link key={x} href="#">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              whileHover={{ rotate: "5deg", scale: 0.9 }}
              className="w-full relative py-1 cursor-pointer"
            >
              <Image
                src={`/properties/types/${x}`}
                alt="apartment"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xl text-center absolute bottom-2 left-2 text-white font-bold bg-[#000000ae] px-2 rounded-md">
                {x.split(".")[0]}
              </p>
              <p className="text-3xl flex justify-center items-center absolute top-2 right-2">
                <GrFormNextLink className="-rotate-45 bg-blue-100 text-black rounded-full" />
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypes;
