import React from 'react'
import { PageTitle } from '../../PageTitle';
import { Skill } from './Skill'
import { SkillCard } from './SkillCard'
import jsonData from '../skills.json'


function SkillSection() {
    
    return(
        <section className="py-10">
            <PageTitle>Skills</PageTitle>
            
            {/*{Object.entries(jsonData.frontEndSkills).map(([key,value]) => (
                    <Skill
                        key={value.alt}
                        src={value.src}
                        label={value.label}
                    />
                ))}*/}
            <SkillCard
                title="Front End"
                skills={Object.entries(jsonData.frontEndSkills).map(([key,value]) => (
                    <Skill
                        key={key}
                        src={value.src}
                        label={value.label}
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
                    />
                ))}
            />
            <SkillCard
                title="Otras Herramientas"
                skills={Object.entries(jsonData.toolsSkills).map(([key,value]) => (
                    <Skill
                        key={key}
                        src={value.src}
                        label={value.label}
                    />
                ))}
            />
        </section>
    )
}

export {SkillSection}