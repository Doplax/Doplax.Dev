import React from 'react'
import { PageTitle } from '../../PageTitle';
import { Skill } from './Skill'
import { SkillCard } from './SkillCard'
import jsonData from '../skills.json'


function SkillSection() {
    
    return(
        <section className="py-28">
            <PageTitle>Skills</PageTitle>
            <SkillCard
                title="Front End"
                skills={Object.entries(jsonData.frontEndSkills).map(([key,value]) => (
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
                skills={Object.entries(jsonData.backEndSkills).map(([key,value]) => (
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
                skills={Object.entries(jsonData.toolsSkills).map(([key,value]) => (
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