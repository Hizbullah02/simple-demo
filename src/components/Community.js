import imag1 from "../assets/Icons/community1.png";
import imag2 from "../assets/Icons/community2.png";
import imag3 from "../assets/Icons/community3.png";

const Community = () => {
  const Data = [
    {
      icon: imag1,
      title: "Membership Organisations",
      paragraph:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: imag2,
      title: "National Associations",
      paragraph:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: imag3,
      title: "Clubs And Groups",
      paragraph:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="px-10 md:px-4 lg:px-20 xl:px-[144px]">
      <div className="text-center mt-10">
        <h1 className="text-[#4D4D4D] text-[36px] font-inter font-bold">
          Manage your entire community <br />
          in a single system
        </h1>
        <p className="text-[#717171] text-[16px]">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="md:flex justify-between py-[68px] mx-auto">
        {Data.map((item, i) => {
          return (
            <div className="text-center w-full sm:w-[500px]  md:w-[299px] mx-auto md:mx-0 mt-8 md:mt-0">
              <img className="mx-auto" src={item.icon} alt="" />
              <h1 className="text-[28px] font-bold text-[#4D4D4D] font-inter mt-4 px-8 ">
                {item.title}
              </h1>
              <p className="text-[14px] text-[#717171] mt-2 px-0 md:px-4 lg:px-0 font-inter">
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
