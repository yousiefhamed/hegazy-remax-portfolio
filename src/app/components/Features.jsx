"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiDivideCircle } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";

function Features() {
  const featuresList = [
    {
      icon: <GoPeople className="w-5 h-5" />,
      title: "التنوع",
      description:
        "حوالي 90% من سكان دبي هم من الأجانب، مما يعكس بيئتها الغنية متعددة الثقافات وموقفها المتسامح تجاه الجميع.",
    },
    {
      icon: <AiOutlineSafety className="w-5 h-5" />,
      title: "الأمان",
      description:
        "تتصدر دبي باستمرار التصنيف العالمي باعتبارها واحدة من أكثر المدن أمانًا في العالم. وحصلت الإمارات أيضًا على المركز الثاني بين أكثر الدول أمانًا على هذا الكوكب، وفقًا لشركة جلوبال فاينانس.",
    },
    {
      icon: <GoDatabase className="w-5 h-5" />,
      title: "عملة مستقرة",
      description:
        "لقد تم ربط سعر صرف الدرهم بالدولار بشكل ثابت منذ أكثر من 20 عامًا، مما يضمن الاستقرار والثقة في المعاملات المالية.",
    },
    {
      icon: <IoDocumentTextOutline className="w-5 h-5" />,
      title: "فرص الحصول على تأشيرة الإقامة",
      description:
        "يوفر الاستثمار في العقارات (يبدأ من 750,000 درهم إماراتي أو 204,000 دولار أمريكي) إمكانية الحصول على تأشيرة إقامة.",
    },
    {
      icon: <FiDivideCircle className="w-5 h-5" />,
      title: "الإعفاء من ضريبة الأرباح للمقيمين",
      description:
        "ويشمل ذلك الدخل من العقارات المستأجرة، مما يقدم حوافز جذابة لأصحاب العقارات والمستثمرين.",
    },
    {
      icon: <FiBarChart2 className="w-5 h-5" />,
      title: "معدلات الرهن العقاري منخفضة",
      description:
        "بالنسبة لغير المقيمين، تصل معدلات الرهن العقاري إلى 5-7%، مما يوفر خيارات تمويل يمكن الوصول إليها لشراء العقارات.",
    },
    {
      icon: <TiHomeOutline className="w-5 h-5" />,
      title: "اكتساب الممتلكات عن بعد",
      description:
        "تواصل معنا، وسنساعدك في اختيار عقار مناسب أثناء التعامل مع كافة الإجراءات الشكلية للمعاملة. علاوة على ذلك، مع عمولة 0%، يتم تعويض خدماتنا مباشرة من قبل المطورين.",
    },
  ];

  return (
    <div className="w-full max-w-[1950px] mx-auto flex flex-col justify-center items-center md:px-10 px-5 py-20">
      <div className="w-full flex flex-col justify-center items-start gap-10">
        <h2 className="font-bold px-10 relative before:absolute before:right-0 before:w-5 before:h-5 before:bg-black before:rounded-full">
          اكتشف ما يميزنا
        </h2>
        <div className="w-full flex justify-between items-center">
          <p className="text-5xl font-bold">لماذا تثق في ريماكس</p>
          <Link
            href="#"
            className="text-md h-10 font-bold bg-black text-white py-2 ps-1 pe-5 rounded-full flex justify-center items-center gap-2 hover:scale-110 transition-all"
          >
            <p className="bg-blue-100 text-black h-8 w-8 rounded-full flex justify-center items-center">
              <LuPhoneCall />
            </p>
            <p>تواصل معنا</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly items-center mt-14 gap-10">
        {featuresList.map(({ icon, title, description }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="basis-96 grow-0 shrink-0 flex flex-col gap-3 justify-center items-start cursor-pointer"
          >
            <div className="flex flex-col gap-2">
              {icon}
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
