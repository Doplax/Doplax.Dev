const skillList =
{
    //FRONT END
    "html": {
        "src": "/svg/html.svg",
        "label": "HTML",
        "description": "Standard markup language for creating web pages.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        "TechnologyType": "Frontend",
    },
    "css": {
        "src": "/svg/css.svg",
        "label": "CSS",
        "description": "Cascading Style Sheets used for describing the look and formatting of a document written in HTML.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS",
        "TechnologyType": "Frontend",
    },
    "javascript": {
        "src": "/svg/javascript.svg",
        "label": "JavaScript",
        "description": "High-level, dynamic, untyped, and interpreted programming language.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "TechnologyType": "Frontend",
    },
    "typescript": {
        "src": "/svg/typescript.svg",
        "label": "Typescript",
        "description": "Typed superset of JavaScript that compiles to plain JavaScript.",
        "url": "https://www.typescriptlang.org/",
        "TechnologyType": "Frontend",
    },
    "angular": {
        "src": "/svg/angular.svg",
        "label": "Angular",
        "description": "Platform for building mobile and desktop web applications.",
        "url": "https://angular.io/",
        "TechnologyType": "Frontend",
    },
    "rxjs": {
        "src": "/svg/rxjs.svg",
        "label": "RxJS",
        "description": "Library for composing asynchronous and event-based programs by using observable sequences.",
        "url": "https://rxjs.dev/",
        "TechnologyType": "Frontend",
    },
    "react": {
        "src": "/svg/react.svg",
        "label": "React",
        "description": "JavaScript library for building user interfaces.",
        "url": "https://reactjs.org/",
        "TechnologyType": "Frontend",
    },
    "next.js": {
        "src": "/svg/next-js.svg",
        "label": "Next.js",
        "description": "JavaScript framework for production: React, Node.js, server rendering, and more.",
        "url": "https://nextjs.org/",
        "TechnologyType": "Frontend",
    },
    "bootstrap": {
        "src": "/svg/bootstrap.svg",
        "label": "Bootstrap",
        "description": "Open-source CSS framework directed at responsive, mobile-first web development.",
        "url": "https://getbootstrap.com/",
        "TechnologyType": "Frontend",
    },

    "tailwind": {
        "src": "/svg/tailwind.svg",
        "label": "Tailwind",
        "description": "A utility-first CSS framework for building custom designs.",
        "url": "https://tailwindcss.com/",
        "TechnologyType": "Frontend",
    },

    // BACKEND 
    "csharp": {
        "src": "/svg/csharp.svg",
        "label": "C Sharp",
        "description": "Multi-paradigm programming language developed and standardised by the Microsoft company",
        "url": "https://dotnet.microsoft.com/es-es/languages/csharp",
        "TechnologyType": "Backend",
    },

    "dotnet": {
        "src": "/svg/dotnet.svg",
        "label": "Dot Net",
        "description": "cross-platform framework for building modern applications and efficient cloud services.",
        "url": "https://dotnet.microsoft.com/es-es/",
        "TechnologyType": "Backend",
    },
    
    "mssql": {
        "src": "/svg/mssql.svg",
        "label": "SQL Server",
        "description": "Relational database management system, developed by Microsoft.",
        "url": "https://www.microsoft.com/es-es/sql-server/sql-server-downloads",
        "TechnologyType": "Backend",
    },

    //"sql": {
    //    "src": "/svg/sql.svg",
    //    "label": "SQL",
    //    "description": "Programming language used for communicating with databases.",
    //    "url": "https://en.wikipedia.org/wiki/SQL",
    //    "TechnologyType": "Backend",
    //},

    "nodejs": {
        "src": "/svg/node.svg",
        "label": "Node.js",
        "description": "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        "url": "https://nodejs.org/",
        "TechnologyType": "Backend",
    },
    "mongodb": {
        "src": "/svg/mongodb.svg",
        "label": "MongoDB",
        "description": "Open-source, document-oriented NoSQL database.",
        "url": "https://www.mongodb.com/",
        "TechnologyType": "Backend",    
    },
    "linux": {
        "src": "/svg/linux.svg",
        "label": "Linux",
        "description": "Open-source operating system based on the Linux kernel.",
        "url": "https://www.linux.org/",
        "TechnologyType": "Backend",
    },
    //"nestjs": {
    //    "src": "/svg/nest-js.svg",
    //    "label": "NestJS",
    //    "description": "A framework for building efficient, reliable and scalable server-side applications.",
    //    "url": "https://nestjs.com/",
    //    "TechnologyType": "Backend",
    //},

    //"python": {
    //    "src": "/svg/python.svg",
    //    "label": "Python",
    //    "description": "High-level programming language designed for readability.",
    //    "url": "https://www.python.org/",
    //    "TechnologyType": "Backend",
    //},

    // TOOLS
    "docker": {
        "src": "/svg/docker.svg",
        "label": "Docker",
        "description": "Development virtual machine.",
        "url": "https://www.docker.com/",
        "TechnologyType": "Tools",
    },
    "jasmine": {
        "src": "/svg/jasmine.svg",
        "label": "Jasmine",
        "description": "A behavior-driven development framework for testing JavaScript code.",
        "url": "https://jasmine.github.io/",
        "TechnologyType": "Tools",
    },
    "git": {
        "src": "/svg/git.svg",
        "label": "Git",
        "description": "Distributed version control system.",
        "url": "https://git-scm.com/",
        "TechnologyType": "Tools",
    },
    "figma": {
        "src": "/svg/figma.svg",
        "label": "Figma",
        "description": "Web-based design and prototyping tool.",
        "url": "https://www.figma.com/",
        "TechnologyType": "Tools",
    },
    "notion": {
        "src": "/svg/notion.svg",
        "label": "Notion",
        "description": "Productivity application that combines kanban boards, databases, tasks, and notes.",
        "url": "https://www.notion.so/",
        "TechnologyType": "Tools",
    },
    "wordpress": {
        "src": "/svg/wordpress.svg",
        "label": "Wordpress",
        "description": "Open-source content management system based on PHP and MySQL.",
        "url": "https://wordpress.org/",
        "TechnologyType": "Tools",
    },
    "chatgpt": {
        "src": "/svg/chatgpt.svg",
        "label": "ChatGPT",
        "description": "AI language model by OpenAI that generates human-like responses.",
        "url": "https://openai.com/research/chatgpt",
        "TechnologyType": "Tools",
    },
}


export { skillList }