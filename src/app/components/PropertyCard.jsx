import { GrFormNextLink } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const PropertyCard = ({ property }) => {
  const { image, title, category, location, price, features } = property;

  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
      className="property w-full h-[500px] rounded-2xl flex justify-between items-start flex-col p-5 cursor-pointer"
    >
      <div className="w-full flex justify-between items-center">
        <p className="text-4xl flex justify-center items-center gap-2">
          <GrFormNextLink className="-rotate-45 bg-blue-100 text-black rounded-full" />
        </p>
        <div className="title-category flex justify-center items-end flex-col font-bold text-lg">
          <p className="font-bold text-lg">{title}</p>
          <p>{category}</p>
        </div>
      </div>
      <div className="features w-full flex flex-col justify-center items-end gap-3 text-black text-sm">
        <div className="flex justify-center items-center gap-2 bg-blue-100 py-3 px-2 rounded-xl">
          <CiLocationOn />
          <p>{location}</p>
        </div>
        <div className="w-full flex flex-wrap justify-stretch items-stretch gap-1">
          {features.map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between items-start flex-col grow shrink basis-20 gap-auto bg-blue-100 py-3 px-2 rounded-xl"
            >
              <p className="text-[12px] text-gray-600">{label}</p>
              <p className="text-[16px] leading-4 font-bold">{value}</p>
            </div>
          ))}
        </div>
        <h3 className="title text-2xl font-bold transition-all p-2 bg-[#000000ae] rounded-lg text-white">
          شقة في التجمع الخامس كمباوند التجمع
        </h3>
      </div>
    </div>
  );
};

export default PropertyCard;
