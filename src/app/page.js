import Image from "next/image";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="flex items-center gap-20">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-7xl bg-gradient-to-b from-green-600 to-gray-400 bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p className="text-xl font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="" text="See Our Works"></Button>
      </div>
      <Image
        className="w-2/5 animate-move"
        src="/Consulting-bro.png"
        alt=""
        width={500}
        height={500}
      ></Image>
    </div>
  );
}
