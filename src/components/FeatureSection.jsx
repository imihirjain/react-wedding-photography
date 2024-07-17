import { features } from "../constants";
import user1 from "../assets/profile-pictures/user1.jpg";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Look at Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
      </div>
      <div className="flex flex-row flex-wrap gap-14 mt-8 lg:mt-15">
        
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 lg:ml-10">
              <div className="flex mx-6 rounded-2xl p-2 bg-neutral-900 text-orange-700 justify-center items-center">
                {feature.icon}
              </div>
                <h5 className="mt-8 ml-9 mb-4 text-xl">{feature.text}</h5>
                <p className="text-md p-2 ml-7 mb-6 text-neutral-500">
                  {feature.description}
                </p>
              <span className="items-start px-10">{feature.book} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
