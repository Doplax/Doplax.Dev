import { Divider } from "@nextui-org/react";

export function AboutAuthor() {
  return (
    <>
      <Divider className="my-7" />
      <div className=" flex flex-row px-5">
        {/* Image */}
        <div className=" flex flex-row w-1/4 ">
          <img
            className="rounded-md"
            src="/img/pol-valle.webp"
            alt="Profile Image"
          />
        </div>

        {/* About me */}
        <div className="flex flex-col w-3/4 pl-10">
          <h3 className="text-3xl font-bold">Written by Pol Valle</h3>
        </div>
      </div>
    </>
  );
}
