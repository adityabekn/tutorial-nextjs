import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="my-5">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link
          href="/portfolio/illustrations"
          className="border-4 rounded w-72 h-72 relative"
        >
          <span className="absolute">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites">Websites</Link>
        <Link href="/portfolio/applications">Applications</Link>
      </div>
    </div>
  );
};

export default Portfolio;
