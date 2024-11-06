import image1 from "../assets/images/client1.png";
import image2 from "../assets/images/client2.png";
import image3 from "../assets/images/client3.png";
import image4 from "../assets/images/client4.png";
import image5 from "../assets/images/client5.png";
import image6 from "../assets/images/client6.png";


const OurClients = () => {
  const images = [image1, image2, image3, image4, image5, image6,];
  return (
    <div className="mt-10 px-2 sm:px-8 lg:px-[144px]">
      <div className="text-center">
        <h1 className="text-[#4D4D4D] text-[36px] font-semibold font-inter">
          Our Clients
        </h1>
        <p className="text-[16px] text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap justify-between py-[25px] ">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
