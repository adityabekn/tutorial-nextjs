import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <h1 className="my-5">Choose a gallery</h1>
      <div className="flex gap-6 text-white">
        <Link
          href="/portfolio/illustrations"
          className="border-4 rounded border-gray-300 w-72 h-96 relative hover:text-green-400"
        >
          <Image
            src="/illustrations.jpg"
            alt="illustrations"
            fill={true}
            className="object-cover"
          ></Image>
          <span className="absolute right-2 bottom-2 text-2xl font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="border-4 rounded border-gray-300 w-72 h-96 relative hover:text-green-400"
        >
          <Image
            src="/websites.jpg"
            alt="websites"
            fill={true}
            className="object-cover"
          ></Image>
          <span className="absolute right-2 bottom-2 text-3xl font-bold">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-4 rounded border-gray-300 w-72 h-96 relative hover:text-green-400"
        >
          <Image
            src="/applications.jpg"
            alt="applications"
            fill={true}
            className="object-cover"
          ></Image>
          <span className="absolute right-2 bottom-2 text-2xl font-bold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
