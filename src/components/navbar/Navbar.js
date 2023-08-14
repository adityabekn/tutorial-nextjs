import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">Aditya Bekti</Link>
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className="p-1 bg-green-400 cursor-pointer rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
