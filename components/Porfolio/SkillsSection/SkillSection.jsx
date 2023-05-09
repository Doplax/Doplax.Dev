import React from 'react'
import { PageTitle } from '../../PageTitle';
import { Skill } from './Skill'
import { SkillCard } from './SkillCard'


function SkillSection() {
    
    const frontEndSkills = [
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/html-logo.png?raw=true",
            alt: "html5",
            label: "HTML",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/css-logo.png?raw=true",
            alt: "css3",
            label: "CSS",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/js-logo.png?raw=true",
            alt: "javascript",
            label: "JavaScript",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/typescript-logo.png?raw=true",
            alt: "Typescript",
            label: "Typescript",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/bootstrap-logo.png?raw=true",
            alt: "bootstrap",
            label: "Bootstrap",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/tailwind-log.png?raw=true",
            alt: "tailwind",
            label: "Tailwind",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/react-icon.png?raw=true",
            alt: "react",
            label: "React",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/next-js-logo.png?raw=true",
            alt: "next-js",
            label: "Next.js",
        },
    ];
    
    const backEndSkills = [
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/node-logo.png?raw=true",
            alt: "nodejs",
            label: "Node.js",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/npm-logo.png?raw=true",
            alt: "npm",
            label: "npm",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/linux-logo.png?raw=true",
            alt: "linux",
            label: "Linux",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/python-logo.png?raw=true",
            alt: "python",
            label: "Python",
        },
        {
            src: "https://github.com/Doplax/Doplax/blob/main/img/mongodb-logo.png?raw=true",
            alt: "mongodb",
            label: "MongoDB",
        },
    ];
    

    const toolsSkills = [
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/git.png?raw=true",
            alt: "git",
            label: "Git",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/github.png?raw=true",
            alt: "github",
            label: "GitHub",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/npm.png?raw=true",
            alt: "npm",
            label: "Npm",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/netlify.png?raw=true",
            alt: "netlify",
            label: "Netlify",
        },
    ];
    
    return(
        <section className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
            <PageTitle>Skills</PageTitle>
            <SkillCard
                title="Front End"
                skills={frontEndSkills.map((skill) => (
                    <Skill
                        key={skill.alt}
                        src={skill.src}
                        alt={skill.alt}
                        label={skill.label}
                    />
                ))}
            />
            <SkillCard
                title="Back End"
                skills={backEndSkills.map((skill) => (
                    <Skill
                        key={skill.alt}
                        src={skill.src}
                        alt={skill.alt}
                        label={skill.label}
                    />
                ))}
            />
            <SkillCard
                title="Herramientas"
                skills={toolsSkills.map((skill) => (
                    <Skill
                        key={skill.alt}
                        src={skill.src}
                        alt={skill.alt}
                        label={skill.label}
                    />
                ))}
            />
        </section>
    )
}

export {SkillSection}