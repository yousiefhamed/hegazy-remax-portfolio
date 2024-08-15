"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroInfo = () => {
  const [inView, setInView] = useState(false);
  const [transaction, setTransaction] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [properties, setProperties] = useState(0);

  useEffect(() => {
    if (inView) {
      if (transaction < 99) {
        const interval = setInterval(() => {
          setTransaction((prev) => prev + 1);
        }, 10);
        return () => clearInterval(interval);
      }
      if (satisfactionRate < 98) {
        const interval = setInterval(() => {
          setSatisfactionRate((prev) => prev + 1);
        }, 10);
        return () => clearInterval(interval);
      }
      if (properties < 500) {
        const interval = setInterval(() => {
          setProperties((prev) => prev + 1);
        }, 1);
        return () => clearInterval(interval);
      }
    }
  }, [transaction, satisfactionRate, properties, inView]);

  return (
    <div className="w-full md:h-svh flex justify-between items-center flex-col py-5">
      <div className="w-full h-full flex justify-start items-start flex-col gap-5 py-10">
        <motion.p
          initial={{
            translateX: "-100%",
            visibility: "hidden",
          }}
          whileInView={{ translateX: 0, visibility: "visible" }}
          className="text-lg font-normal max-w-80"
        >
          في شركة ريماكس العقارية، نقدم أكثر من مجرد الخدمات العقارية؛ نحن نقدم
          تجربة لا مثيل لها مصممة لتلبية احتياجاتك وتجاوز توقعاتك.
        </motion.p>
        <div className="w-full flex flex-wrap justify-start items-center gap-5">
          <motion.div
            initial={{ translateX: "100%", visibility: "hidden" }}
            whileInView={{ translateX: 0, visibility: "visible" }}
            className="flex justify-start items-center"
          >
            <Image
              src="/team/hamada.jpg"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-16 h-16 object-cover grayscale"
            />
            <Image
              src="/team/hamoda.jpg"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-16 h-16 object-cover grayscale -mr-4"
            />
            <Image
              src="/team/hamod.jpg"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-16 h-16 object-cover grayscale -mr-4"
            />
            <Image
              src="/team/hamdy.jpg"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-16 h-16 object-cover grayscale -mr-4"
            />
            <Image
              src="/team/hoda.jpg"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-16 h-16 object-cover grayscale -mr-4"
            />
          </motion.div>
          <p className="max-w-32">تعرف علي فريقنا المتميز</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start">
        <div className="w-full flex justify-start items-center gap-14 py-10 border-b-2">
          <motion.p
            whileInView={() => setInView(true)}
            className="text-7xl flex justify-start items-center min-w-32"
          >
            +{transaction}
          </motion.p>
          <p className="text-3xl max-w-60">تاريخ معاملات ناجحة</p>
        </div>
        <div className="w-full flex justify-start items-center gap-14 py-10 border-b-2">
          <motion.p
            whileInView={() => setInView(true)}
            className="text-7xl flex justify-start items-center min-w-32"
          >
            {satisfactionRate}%
          </motion.p>
          <p className="text-3xl max-w-60">معدل رضا العملاء عنا</p>
        </div>
        <div className="w-full flex justify-start items-center gap-14 py-10">
          <motion.p
            whileInView={() => setInView(true)}
            className="text-7xl flex justify-start items-center min-w-32"
          >
            {properties}
          </motion.p>
          <p className="text-3xl max-w-60">عقارات جاهزة لاختيارك</p>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
