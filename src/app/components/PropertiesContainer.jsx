import Link from "next/link";
import PropertyCard from "./PropertyCard";

const PropertiesContainer = () => {
  const properties = [
    {
      id: "property895785",
      image: "/properties/listing/1.webp",
      title: "شقة في التجمع الخامس",
      category: "التجمع الخامس",
      location: "التجمع الخامس",
      price: "من 290k EGP",
      features: [
        { label: "السعر", value: "290k EGP" },
        { label: "تقسيط علي", value: "10 سنين" },
        { label: "مقدم", value: "30,000 EGP" },
        { label: "تاريخ التشطيب", value: "09/2025" },
      ],
    },
    {
      id: "property895786",
      image: "/properties/listing/2.webp",
      title: "شقة في التجمع الخامس",
      category: "التجمع الخامس",
      location: "التجمع الخامس",
      price: "من 290k EGP",
      features: [
        { label: "السعر", value: "290k EGP" },
        { label: "تقسيط علي", value: "10 سنين" },
        { label: "مقدم", value: "30,000 EGP" },
        { label: "تاريخ التشطيب", value: "09/2025" },
      ],
    },
    {
      id: "property895787",
      image: "/properties/listing/3.webp",
      title: "شقة في التجمع الخامس",
      category: "التجمع الخامس",
      location: "التجمع الخامس",
      price: "من 290k EGP",
      features: [
        { label: "السعر", value: "290k EGP" },
        { label: "تقسيط علي", value: "10 سنين" },
        { label: "مقدم", value: "30,000 EGP" },
        { label: "تاريخ التشطيب", value: "09/2025" },
      ],
    },
    {
      id: "property895788",
      image: "/properties/listing/4.webp",
      title: "شقة في التجمع الخامس",
      category: "التجمع الخامس",
      location: "التجمع الخامس",
      price: "من 290k EGP",
      features: [
        { label: "السعر", value: "290k EGP" },
        { label: "تقسيط علي", value: "10 سنين" },
        { label: "مقدم", value: "30,000 EGP" },
        { label: "تاريخ التشطيب", value: "09/2025" },
      ],
    },
    {
      id: "property895789",
      image: "/properties/listing/5.webp",
      title: "شقة في التجمع الخامس",
      category: "التجمع الخامس",
      location: "التجمع الخامس",
      price: "من 290k EGP",
      features: [
        { label: "السعر", value: "290k EGP" },
        { label: "تقسيط علي", value: "10 سنين" },
        { label: "مقدم", value: "30,000 EGP" },
        { label: "تاريخ التشطيب", value: "09/2025" },
      ],
    },
    {
      id: "property895790",
      image: "/properties/listing/6.webp",
      title: "شقة في التجمع الخامس",
      category: "التجمع الخامس",
      location: "التجمع الخامس",
      price: "من 290k EGP",
      features: [
        { label: "السعر", value: "290k EGP" },
        { label: "تقسيط علي", value: "10 سنين" },
        { label: "مقدم", value: "30,000 EGP" },
        { label: "تاريخ التشطيب", value: "09/2025" },
      ],
    },
  ];

  return (
    <div className="w-screen bg-black">
      <div className="w-full max-w-[1950px] mx-auto md:px-10 py-20 px-5 text-white">
        <div className="w-full flex justify-between items-center md:flex-row flex-col gap-5">
          <h2 className="text-4xl font-black text-center">
            اكتشف بورتفوليو عقاراتنا
          </h2>
          <div className="bg-zinc-700 flex justify-center items-center p-1 rounded-md">
            <button className="px-5 py-2 hover:bg-zinc-300 transition-all rounded-lg bg-white text-black">
              شقق
            </button>
            <button className="px-5 py-2 hover:bg-zinc-600 transition-all rounded-lg">
              فيلات
            </button>
            <button className="px-5 py-2 hover:bg-zinc-600 transition-all rounded-lg">
              ايجار
            </button>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 py-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="w-fit mx-auto my-5">
          <Link
            href="#"
            className="inline-block bg-blue-100 text-black px-5 py-3 rounded-full font-bold text-lg hover:scale-125 transition-all"
          >
            كل العقارات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertiesContainer;
