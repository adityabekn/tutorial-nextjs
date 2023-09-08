import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="p-2 cursor-pointer bg-green-400 border-0 rounded w-fit"
    >
      <button className="text-white">{text}</button>
    </Link>
  );
};

export default Button;
