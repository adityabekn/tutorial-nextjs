import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="">
      {data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className="flex items-center gap-12 mb-12"
          key={item.id}
        >
          <div className="h-48 w-96 relative">
            <Image
              src="/blog/post-1.jpg"
              alt=""
              fill={true}
              className="object-cover"
            ></Image>
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="mb-2 text-2xl">{item.title}</h1>
            <p className="text-base font-light">{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
