import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div>
      <h1>Let&apos;s Keep in Touch</h1>
      <div className="flex items-center gap-24">
        <div className="flex-1 relative h-96">
          <Image
            src="/Contact_us-bro.png"
            alt=""
            fill={true}
            className="object-contain animate-move"
          ></Image>
        </div>
        <form action="" className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-3 bg-transparent text-gray-200 border-2 border-gray-200 font-bold"
          />
          <input
            type="text"
            placeholder="email"
            className="p-3 bg-transparent text-gray-200 border-2 border-gray-200 font-bold"
          />
          <textarea
            name=""
            placeholder="message"
            cols="30"
            rows="10"
            className="p-3 bg-transparent text-gray-200 border-2 border-gray-200 font-bold"
          ></textarea>
          <Button url="#" text="Send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
