import { PageTitle } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faPenRuler,
  faCode,
  faThumbsUp,
  faBatteryFull,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    icon: faMobile,
    title: "Responsive Sites",
    description: "Your site will display correctly on any device, whether it’s computers, tablets, or mobiles.",
  },
  {
    icon: faPenRuler,
    title: "Creative Designs",
    description: "Design is fundamental, therefore it must be attractive to help retain potential customers on your website.",
  },
  {
    icon: faCode,
    title: "Development",
    description: "The scalability of the project is crucial for growing businesses thinking long-term.",
  },
  {
    icon: faThumbsUp,
    title: "Social Media Integration",
    description: "Social media are an indispensable tool for any business. I’ll make sure they’re updated and optimized.",
  },
  {
    icon: faBatteryFull,
    title: "Performance",
    description: "The browsing experience should be smooth and efficient, essential to provide the best service.",
  },
  {
    icon: faCrosshairs,
    title: "SEO",
    description: "On the internet, if you don’t appear on Google, you don’t exist, so good practices are required to position your business online.",
  },
];

function ServiciosSection() {
  return (
    <section className="my-28">
      <PageTitle>Services</PageTitle>
      <h2 className="font-bold text-3xl my-10">Services I offer to my clients</h2>
      <div className="md:grid md:grid-cols-3 md:gap-10">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col justify-start items-center my-20">
            <div className="flex justify-center items-center h-10 w-10 mb-5 ">
              <FontAwesomeIcon icon={service.icon} size="3x" style={{ color: "var(--yellow)" }} />
            </div>
            <h4 className="text-center text-gray-100">{service.title}</h4>
            <p className="text-center text-gray-300 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { ServiciosSection };
