import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return notFound();
  }

  return res.json();
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="flex mb-8">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="">{data.body}</p>
          <div className="flex flex-row gap-3">
            <div className="h-10 w-10 relative rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="profile"
                fill={true}
                className="object-cover"
              ></Image>
            </div>
            <p className="font-semibold self-center">Aditya Bekti</p>
          </div>
        </div>
        <div className="flex-1 h-64 relative">
          <Image
            src="/blog/post-1.jpg"
            alt=""
            fill={true}
            className="object-cover"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col gap-3 font-light text-sm">
        <p>
          Ut sit amet sodales metus. Curabitur sed quam nec felis aliquam auctor
          vitae at nisi. Donec erat arcu, semper ac quam sed, imperdiet euismod
          neque. Nulla sodales vulputate lectus, vel venenatis enim lobortis
          hendrerit. Vestibulum a auctor mauris. Quisque et consequat ipsum.
          Aliquam ultricies sagittis neque quis suscipit. Suspendisse
          ullamcorper ultricies nunc ut dapibus. Duis euismod ipsum risus, nec
          vehicula ex porta eget.
        </p>
        <p>
          Integer nec congue nisi, non facilisis justo. Quisque pellentesque
          efficitur nibh nec mollis. Vivamus aliquam risus quam, sit amet
          tristique purus pretium sit amet. Fusce varius luctus sodales. Aenean
          sagittis sodales nibh sed hendrerit. Nunc sit amet libero lectus.
          Aenean eu gravida magna. Integer vitae magna id nibh pulvinar
          fringilla ut nec ex. Morbi consequat vitae nunc quis hendrerit.
          Pellentesque convallis a lectus vitae aliquet. Praesent ipsum magna,
          suscipit ac quam id, molestie mattis sapien.
        </p>
        <p>
          Donec tristique varius iaculis. Ut non rutrum ipsum, quis dignissim
          leo. Etiam vitae volutpat dui, nec mollis arcu. Sed facilisis massa at
          gravida fringilla. Vivamus vel arcu sed magna luctus congue. Maecenas
          vitae enim vestibulum, volutpat metus ac, placerat nunc. Nam nec
          venenatis nisi. Morbi dictum nec nulla quis tristique. Etiam facilisis
          erat pretium arcu vulputate congue. Nunc maximus dignissim vestibulum.
          Praesent ac sapien rutrum libero cursus pharetra. Ut vehicula velit
          ipsum, quis gravida nunc condimentum vulputate.
        </p>
      </div>
    </div>
  );
};

export default Post;
