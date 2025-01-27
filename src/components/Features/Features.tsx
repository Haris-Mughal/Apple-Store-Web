import { FaMusic, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-gradient-to-b h-100 from-blue-400 to-blue-300 py-10 flex justify-center items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaMusic className="text-4xl text-white mb-4" />
          <p className="text-white text-lg font-semibold">
            Incredible sound loved by 30 million+ people.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers className="text-4xl text-white mb-4" />
          <p className="text-white text-lg font-semibold">
            World-leading audio technology, including SweatGuard, BassUp, ACAA,
            and HearID.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
