import { PageTitle } from "@/components";
import { Skill } from "./Skill";
import { SkillCard } from "./SkillCard";
import { skillList } from "./skillList";

function SkillsSection() {

  console.log(skillList);
  const filteredFrontEndSkills = Object.entries(skillList).filter(
    ([key, value]) => value.TechnologyType === "Frontend"
  );

  const filteredBackEndSkills = Object.entries(skillList).filter(
    ([key, value]) => value.TechnologyType === "Backend"
  );

  const filteredToolSkills = Object.entries(skillList).filter(
    ([key, value]) => value.TechnologyType === "Tools"
  );

  return (
    <section className="py-28">
      <PageTitle>Skills</PageTitle>
      <SkillCard
        title="Front End"
        skills={filteredFrontEndSkills.map(([key, value]) => (
          <Skill
            key={key}
            src={value.src}
            label={value.label}
            url={value.url}
          />
        ))}
      />
      <SkillCard
        title="Back End"
        skills={filteredBackEndSkills.map(([key, value]) => (
          <Skill
            key={key}
            src={value.src}
            label={value.label}
            url={value.url}
          />
        ))}
      />
      <SkillCard
        title="Other Tools"
        skills={filteredToolSkills.map(([key, value]) => (
          <Skill
            key={key}
            src={value.src}
            label={value.label}
            url={value.url}
          />
        ))}
      />
    </section>
  );
}

export { SkillsSection };
