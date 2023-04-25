// sobreMi.js
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import SkillSection from '../components/SkillSection';
import Skill from '../components/Skill';

export default function sobreMi() {
    const frontEndSkills = [
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/html5.png?raw=true',
          alt: 'html',
          label: 'HTML',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/css3.png?raw=true',
          alt: 'css',
          label: 'CSS',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/javascript.png?raw=true',
          alt: 'javascript',
          label: 'JavaScript',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/react.png?raw=true',
          alt: 'react',
          label: 'React',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/tailwind.png?raw=true',
          alt: 'Tailwind',
          label: 'Tailwind',
        },
      ];
      
      const backEndSkills = [
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/postgresql.png?raw=true',
          alt: 'postgresql',
          label: 'PostgreSQL',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/php.png?raw=true',
          alt: 'php',
          label: 'PHP',
        },
      ];
      
      const toolsSkills = [
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/git.png?raw=true',
          alt: 'git',
          label: 'Git',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/github.png?raw=true',
          alt: 'github',
          label: 'GitHub',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/npm.png?raw=true',
          alt: 'npm',
          label: 'Npm',
        },
        {
          src: 'https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/netlify.png?raw=true',
          alt: 'netlify',
          label: 'Netlify',
        },
      ];      

  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
        <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
          Habilidades
        </h1>
        <SkillSection
          title="Front End"
          skills={frontEndSkills.map((skill) => (
            <Skill key={skill.alt} src={skill.src} alt={skill.alt} label={skill.label} />
          ))}
        />
        <SkillSection
          title="Back End"
          skills={backEndSkills.map((skill) => (
            <Skill key={skill.alt} src={skill.src} alt={skill.alt} label={skill.label} />
          ))}
        />
        <SkillSection
          title="Herramientas"
          skills={toolsSkills.map((skill) => (
            <Skill key={skill.alt} src={skill.src} alt={skill.alt} label={skill.label} />
          ))}
        />
      </div>
      <Footer />
    </>
  );
}
