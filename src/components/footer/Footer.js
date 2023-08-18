import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-12 flex justify-between items-center">
      <div>© 2023 Aditya Bekti. All rights reserved.</div>
      <div className="flex items-center gap-3">
        <Image
          className="cursor-pointer"
          src="/facebook.png"
          width={15}
          height={15}
          alt="Aditya Bekti"
        ></Image>
        <Image
          className="cursor-pointer"
          src="/instagram.png"
          width={15}
          height={15}
          alt="Aditya Bekti"
        ></Image>
        <Image
          className="cursor-pointer"
          src="/twitter.png"
          width={15}
          height={15}
          alt="Aditya Bekti"
        ></Image>
        <Image
          className="cursor-pointer"
          src="/youtube.png"
          width={15}
          height={15}
          alt="Aditya Bekti"
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
