import icon1 from "../assets/Icons/businessReinvent1.png";
import icon2 from "../assets/Icons/businessReinvent2.png";
import icon3 from "../assets/Icons/businessReinvent3.png";
import icon4 from "../assets/Icons/businessReinvent4.png";

const BusinessReinvent = () => {
  const Data = [
    {
      icon: icon1,
      quantity: "2,245,341",
      title: "Members",
    },
    {
      icon: icon2,
      quantity: "2,245,341",
      title: "Clubs",
    },
    {
      icon: icon3,
      quantity: "2,245,341",
      title: "Events Booking",
    },
    {
      icon: icon4,
      quantity: "2,245,341",
      title: "Payments",
    },
  ];
  return (
    <div className="p-5 lg:px-[144px] md:flex gap-2 lg:gap-[72px] items-center mt-12 bg-[#F5F7FA] py-8">
      {/* left-side */}
      <div className="basis-1/2 flex flex-col items-center md:items-start">
        <h1 className="font-bold text-[36px] text-[#4D4D4D]">
          Helping a local
        </h1>
        <h1 className="font-bold text-[36px] text-[#4CAF4F]">
          business reinvent itself
        </h1>
        <p className="text-[#18191F] text-[16px]">
          {" "}
          We reached here with our hard work and dedication
        </p>
      </div>
      {/* Right-side */}
      <div className="mt-10 md:mt-0 basis-1/2 grid grid-cols-2">
        {Data.map((item, key) => {
          return (
            <div key={key} className="flex items-center my-4 mx-auto lg:mx-0 ">
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
              <div className="ml-4">
                <h3 className="text-[28px]">{item.quantity}</h3>
                <p className="text-gray-600 text-[16px]">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessReinvent;
