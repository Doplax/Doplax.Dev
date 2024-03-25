import { Divider } from "@nextui-org/react";
import Image from "next/image";

export function AboutAuthor() {
  return (
    <>
      <Divider className="my-7" />
      <div className=" flex flex-row px-5">
        {/* Image */}
        <div className=" flex flex-row w-1/4 ">
          <Image
            className="rounded-md"
            src="/img/pol-valle.webp"
            alt="Profile Image"
          />
        </div>

        {/* About me */}
        <div className="flex flex-col w-3/4 pl-10">
          <h3 className="text-3xl font-bold">Written by Pol Valle</h3>
          <p>I am particularly drawn to developing applications that are not only functional but also visually appealing and easy to use. I accomplish this by implementing SOLID principles and clean architecture, and applying testing to ensure quality.</p>
        </div>
      </div>
    </>
  );
}
