import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div>
      <div className="w-full h-80 relative">
        <Image
          className="object-cover grayscale"
          src="https://images.pexels.com/photos/1630442/pexels-photo-1630442.jpeg"
          fill={true}
          alt=""
        ></Image>
        <div className="absolute bottom-5 left-5 bg-green-400 p-1.5">
          <h1 className="text-xl">Digital Storytellers</h1>
          <h2 className="text-base font-light">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex-1 mt-12 flex flex-col gap-7">
          <h1 className="text-xl">Who Are We?</h1>
          <p className="text-base font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            accumsan, neque non finibus eleifend, turpis ligula malesuada eros,
            vitae vehicula enim nisi eget ipsum. Pellentesque commodo in turpis
            et semper. Integer at feugiat tortor. Phasellus in ligula pulvinar,
            elementum purus vel, pellentesque sem.
            <br />
            <br />
            Nulla ultricies vitae nunc vel consequat. Ut fringilla porttitor
            turpis vel ornare. Suspendisse iaculis ante id commodo auctor. Sed a
            mauris eu justo consectetur porta vitae in massa.
          </p>
        </div>
        <div className="flex-1 mt-12 flex flex-col gap-7">
          <h1 className="text-xl">What We Do?</h1>
          <p className="text-base font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            accumsan, neque non finibus eleifend, turpis ligula malesuada eros,
            vitae vehicula enim nisi eget ipsum. Pellentesque commodo in turpis
            et semper. Integer at feugiat tortor. Phasellus in ligula pulvinar,
            elementum purus vel, pellentesque sem.
          </p>
          <Button url="contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
