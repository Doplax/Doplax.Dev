import { Image } from "@nextui-org/react";

const Skill = ({ src, alt, label, url }) => (
  <div className="flex flex-col space-y-2 m-2">
    <a className="skill-image flex justify-center items-center mb-1 rounded-lg h-24 w-24 transform transition-transform duration-200 ease-in-out hover:scale-110 hover:border-yellow-500 hover:shadow-[0_0_4px_2px_var(--yellow)]" href={url}>
      <Image isBlurred width={50} height={50} src={src} alt={alt} />
    </a>
    <p className="flex justify-center">{label}</p>
  </div>
);

export { Skill };
