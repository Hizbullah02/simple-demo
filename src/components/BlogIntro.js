import image1 from "../assets/images/introblog1.png";
import image2 from "../assets/images/introblog2.png";
import image3 from "../assets/images/introblog3.png";

const BlogIntro = () => {
  const cardData = [
    {
      image: image1,
      paragraph: "Creating Streamlined Safeguarding Processes with OneRen.",
      link: "#",
    },
    {
      image: image2,
      paragraph:
        "What are your safeguarding responsibilities and how can you manage them?",
      link: "#",
    },
    {
      image: image3,
      paragraph: "Revamping the Membership Model with Triathlon Australia",
      link: "#",
    },
  ];

  return (
    <div className="lg:px-[144px] px-4 mt-8">
      {/* text-section */}
      <div className="text-center">
        <h2 className="text-[#4D4D4D] text-[36px] font-bold">
          Caring is the new marketing
        </h2>
        <p className="text-[#717171] text-[16px] font-bold mt-2 px-2 xl:px-[175px] font-inter">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends, and more. See who's joining the community, read
          about how our community members are increasing their membership income
          and much more.
        </p>
      </div>
      {/* card-section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        {cardData.map((card, key) => {
          return (
            <div className="max-w-sm mx-auto my-0 sm:mb-0" key={key}>
              <img src={card.image} alt={`card-${key}`} className="mx-auto" />
              <div className="relative -mt-20 mx-5 md:mx-3 text-center py-4 bg-[#F5F7FA]">
                <p className="px-10 sm:px-3 md:px-2 xl:px-8 text-[20px] text-[#717171] font-inter">
                  {card.paragraph}
                </p>
                <button className="font-inter mt-3 text-[#4CAF4F] font-semibold text-[20px] shadow-[8px]">
                  Readmore
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogIntro;
