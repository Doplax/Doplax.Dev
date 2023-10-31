import React from 'react'
import { PageTitle } from '../../PageTitle';
import { Skill } from './Skill'
import { SkillCard } from './SkillCard'
import jsonData from '../skills.json'

function SkillSection() {
    
    // Filtrar por TechnologyType y show
    const filteredFrontEndSkills = Object.entries(jsonData).filter(([key, value]) => (
        value.TechnologyType === "Frontend" && value.show
    ));

    const filteredBackEndSkills = Object.entries(jsonData).filter(([key, value]) => (
        value.TechnologyType === "Backend" && value.show
    ));

    const filteredToolSkills = Object.entries(jsonData).filter(([key, value]) => (
        value.TechnologyType === "Tools" && value.show
    ));

    return(
        <section className="py-28">
            <PageTitle>Skills</PageTitle>
            <SkillCard
                title="Front End"
                skills={filteredFrontEndSkills.map(([key,value]) => (
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
                skills={filteredBackEndSkills.map(([key,value]) => (
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
                skills={filteredToolSkills.map(([key,value]) => (
                    <Skill
                        key={key}
                        src={value.src}
                        label={value.label}
                        url={value.url}
                    />
                ))}
            />
        </section>
    )
}

export {SkillSection}
