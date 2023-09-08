import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1 className="text-green-300 text-2xl capitalize">{params.category}</h1>
      <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-3 justify-center">
          <h1 className="text-3xl font-bold">Test</h1>
          <p className="text-xl">Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className="flex-1 relative h-80">
          <Image
            src="/portfolio/illustrations-1.jpg"
            alt=""
            fill={true}
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
