import Image from "next/image";
const LargeCard = ({ image, title, description, buttonText }) => {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl -z-10"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm px-4 py-2 rounded-lg mt-5  text-white  bg-gray-900">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
